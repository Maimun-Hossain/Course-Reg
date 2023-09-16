/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#bde00d",

        secondary: "#cea92f",

        accent: "#63f742",

        neutral: "#25303c",

        "base-100": "#fbf8fb",

        info: "#2285e2",

        success: "#196751",

        warning: "#e1b514",

        error: "#df3320",
      },
    },
  ],
  plugins: [require("daisyui")],
};
