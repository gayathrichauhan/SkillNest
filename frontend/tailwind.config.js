/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1fa36b",     // main green (pretty, fresh)
                primaryLight: "#e8f6ef",
                textMain: "#0f172a",
                textSub: "#475569",
                bgSoft: "#f8fafc",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
