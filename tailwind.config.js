/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#050511", // Deep space background
                primary: "#6C63FF", // Alien/Cyber purple
                secondary: "#00F0FF", // Neon cyan
                glass: "rgba(255, 255, 255, 0.05)",
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
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
