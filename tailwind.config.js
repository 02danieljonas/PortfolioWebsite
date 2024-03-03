/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                background: "url('/background-1.avif')", //https://unsplash.com/photos/photo-of-mountain-ruWkmt3nU58
                background1: "url('/background-1.avif')", //https://unsplash.com/photos/photo-of-mountain-ruWkmt3nU58
            },
        },
    },
    safelist: [
        "h-full",
        "p-2",
        "hidden",
        "absolute",
        "z-10",
        "top-0",
        "left-0",
        "text-2xl",
        "text-3xl",
        { pattern: /block/, variants: ["group-hover"] },
    ],
    plugins: [],
};
