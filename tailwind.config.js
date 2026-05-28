/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                light: "#ffffff", // Pure white background
                dark: "#050511", // Keep dark for elements needing high contrast
                primary: "#4F46E5", // Professional Indigo
                secondary: "#0891B2", // Professional Cyan
                glass: "rgba(0, 0, 0, 0.03)", // Subtle dark shadow for glass on white
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
