/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#051424", // Deep Navy / Brand Background
                primary: "#adc6ff", // Electric Blue
                secondary: "#d2bbff", // Violet
                surface: "#051424",
                'surface-container-lowest': '#010f1f',
                'surface-container-low': '#0d1c2d',
                'surface-container': '#122131',
                'surface-container-high': '#1c2b3c',
                'surface-container-highest': '#273647',
                'surface-variant': '#273647',
                'on-surface': '#d4e4fa',
                'on-surface-variant': '#c2c6d6',
                'outline-variant': '#424754',
                glass: "rgba(10, 15, 30, 0.6)",
            },
            boxShadow: {
                'neon': '0 0 15px rgba(173, 198, 255, 0.3)',
                'neon-strong': '0 0 25px rgba(173, 198, 255, 0.5)',
            },
            fontFamily: {
                heading: ['Syne', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                label: ['"Space Grotesk"', 'sans-serif'],
                code: ['"JetBrains Mono"', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
