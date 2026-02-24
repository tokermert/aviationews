import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                aviation: {
                    navy: "#0A192F",
                    "navy-light": "#112240",
                    "navy-lighter": "#233554",
                    accent: "#64FFDA",
                    muted: "#8892B0",
                    silver: "#CCD6F6",
                    white: "#E6F1FF",
                }
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;
