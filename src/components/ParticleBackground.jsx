import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl', { 
            powerPreference: 'low-power', 
            antialias: false,
            depth: false,
            stencil: false
        }) || canvas.getContext('experimental-webgl');
        if (!gl) return;

        let animationFrameId;
        const isTouch = window.matchMedia('(hover: none)').matches;

        const syncSize = () => {
            // Cap DPR at 1.0 on touch/mobile for smooth 60fps scrolling
            const dpr = isTouch ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
            const w = Math.floor((canvas.clientWidth || window.innerWidth) * dpr);
            const h = Math.floor((canvas.clientHeight || window.innerHeight) * dpr);
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }
        };

        const resizeObserver = new ResizeObserver(syncSize);
        resizeObserver.observe(canvas);
        syncSize();

        const vsSource = `
            attribute vec2 a_position;
            varying vec2 v_texCoord;
            void main() {
                v_texCoord = a_position * 0.5 + 0.5;
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        const fsSource = `
            precision mediump float;
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            varying vec2 v_texCoord;

            float hash(vec2 p) {
                p = fract(p * vec2(123.34, 456.21));
                p += dot(p, p + 45.32);
                return fract(p.x * p.y);
            }

            void main() {
                vec2 uv = v_texCoord;
                vec2 p = (uv - 0.5) * 2.0;
                p.x *= u_resolution.x / u_resolution.y;

                float t = u_time * 0.16;
                
                vec3 bgDark = vec3(0.012, 0.027, 0.07);
                vec3 bgGlow = vec3(0.025, 0.055, 0.12);
                vec3 color = mix(bgDark, bgGlow, 1.0 - length(p * 0.45));

                float grid = 4.5;
                vec2 g_uv = uv * grid;
                vec2 id = floor(g_uv);
                vec2 f_uv = fract(g_uv) - 0.5;

                for(float y = -1.0; y <= 1.0; y++) {
                    for(float x = -1.0; x <= 1.0; x++) {
                        vec2 offs = vec2(x, y);
                        float h = hash(id + offs);
                        vec2 node_p = offs + vec2(sin(t + h * 6.283), cos(t + h * 6.283)) * 0.38;
                        
                        float d = length(f_uv - node_p);
                        float pulse = 0.5 + 0.5 * sin(u_time * 1.5 + h * 6.283);
                        
                        float node = smoothstep(0.045, 0.01, d);
                        color += node * vec3(0.38, 0.65, 0.98) * pulse * 0.55;

                        for(float y2 = -1.0; y2 <= 1.0; y2++) {
                            for(float x2 = -1.0; x2 <= 1.0; x2++) {
                                if(x == x2 && y == y2) continue;
                                vec2 offs2 = vec2(x2, y2);
                                float h2 = hash(id + offs2);
                                vec2 node_p2 = offs2 + vec2(sin(t + h2 * 6.283), cos(t + h2 * 6.283)) * 0.38;
                                
                                float dist_to_line = length(f_uv - mix(node_p, node_p2, clamp(dot(f_uv - node_p, node_p2 - node_p) / dot(node_p2 - node_p, node_p2 - node_p), 0.0, 1.0)));
                                float line = smoothstep(0.009, 0.0, dist_to_line) * smoothstep(1.4, 0.4, length(node_p - node_p2));
                                color += line * vec3(0.68, 0.45, 0.95) * 0.12;
                            }
                        }
                    }
                }

                vec2 mouse = u_mouse / u_resolution;
                float mouse_dist = length(uv - mouse);
                color += (smoothstep(0.35, 0.0, mouse_dist) * 0.08) * vec3(0.38, 0.65, 0.98);

                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const compileShader = (type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vs = compileShader(gl.VERTEX_SHADER, vsSource);
        const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
        if (!vs || !fs) return;

        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            return;
        }

        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
             1,  1,
        ]), gl.STATIC_DRAW);

        const aPosition = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

        const uTime = gl.getUniformLocation(program, 'u_time');
        const uResolution = gl.getUniformLocation(program, 'u_resolution');
        const uMouse = gl.getUniformLocation(program, 'u_mouse');

        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            if (rect.width && rect.height) {
                const nx = (event.clientX - rect.left) / rect.width;
                const ny = 1.0 - (event.clientY - rect.top) / rect.height;
                mouse.x = nx * canvas.width;
                mouse.y = ny * canvas.height;
            }
        };

        if (!isTouch) {
            window.addEventListener('mousemove', handleMouseMove, { passive: true });
        }

        const TARGET_FPS = isTouch ? 24 : 30;
        const FRAME_INTERVAL = 1000 / TARGET_FPS;
        let lastFrameTime = 0;

        const render = (time) => {
            animationFrameId = requestAnimationFrame(render);

            const delta = time - lastFrameTime;
            if (delta < FRAME_INTERVAL) return;
            lastFrameTime = time - (delta % FRAME_INTERVAL);

            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform1f(uTime, time * 0.001);
            gl.uniform2f(uResolution, canvas.width, canvas.height);
            gl.uniform2f(uMouse, mouse.x, mouse.y);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            if (!isTouch) {
                window.removeEventListener('mousemove', handleMouseMove);
            }
            gl.deleteBuffer(positionBuffer);
            gl.deleteProgram(program);
            gl.deleteShader(vs);
            gl.deleteShader(fs);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-45"
             style={{ willChange: 'transform', transform: 'translateZ(0)', contain: 'strict' }}>
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
};

export default ParticleBackground;
