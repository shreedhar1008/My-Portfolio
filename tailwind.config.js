/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#05050A", // Deep space background
                primary: "#6366f1", // Neon indigo
                secondary: "#8b5cf6", // Neon purple
                glass: "rgba(255, 255, 255, 0.03)",
            },
            boxShadow: {
                'neon': '0 0 15px rgba(99, 102, 241, 0.5)',
                'neon-strong': '0 0 25px rgba(99, 102, 241, 0.7)',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['"Plus Jakarta Sans"', 'sans-serif'],
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
