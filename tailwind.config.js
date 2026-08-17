/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#030712", // Ultra-deep midnight slate
                'dark-surface': "#070e1e", // Primary container base
                'dark-card': "rgba(10, 18, 38, 0.75)", // Glass card background
                'dark-border': "rgba(255, 255, 255, 0.08)", // Crisp subtle border
                primary: "#60a5fa", // Electric blue primary
                'primary-glow': "#38bdf8", // Sky blue accent
                'primary-dark': "#1d4ed8", // Deep blue
                secondary: "#c084fc", // Amethyst / Violet accent
                'secondary-glow': "#d8b4fe", // Light violet
                tertiary: "#34d399", // Emerald accent (status & live)
                surface: "#070e1e",
                'surface-container-lowest': '#02050e',
                'surface-container-low': '#060d1b',
                'surface-container': '#0b162c',
                'surface-container-high': '#122240',
                'surface-container-highest': '#1c3158',
                'surface-variant': '#182846',
                'on-surface': '#f1f5f9',
                'on-surface-variant': '#94a3b8',
                'on-surface-muted': '#64748b',
                'outline-variant': '#334155',
                glass: "rgba(8, 15, 32, 0.7)",
            },
            boxShadow: {
                'neon': '0 0 20px rgba(96, 165, 250, 0.25)',
                'neon-strong': '0 0 35px rgba(96, 165, 250, 0.45)',
                'neon-purple': '0 0 25px rgba(192, 132, 252, 0.35)',
                'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                'glass-glow': '0 0 40px -10px rgba(96, 165, 250, 0.3)',
            },
            fontFamily: {
                heading: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
                body: ['Inter', '-apple-system', 'sans-serif'],
                label: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                code: ['"JetBrains Mono"', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 9s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
                'gradient-x': 'gradientX 8s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                gradientX: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            }
        },
    },
    plugins: [],
}
