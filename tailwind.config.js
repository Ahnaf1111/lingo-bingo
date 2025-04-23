/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px 4px rgba(59,130,246,0.6)" },
          "50%": { boxShadow: "0 0 15px 8px rgba(59,130,246,1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        glow: "glow 2s ease infinite",
        "fade-in": "fadeIn 1s ease-in-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
