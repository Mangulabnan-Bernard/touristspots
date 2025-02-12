/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "float-left": {
          "0%": { transform: "translateX(100vw) translateY(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateX(-100vw) translateY(50px)", opacity: "0" },
        },
        "float-right": {
          "0%": { transform: "translateX(-100vw) translateY(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateX(100vw) translateY(-50px)", opacity: "0" },
        },
      },
      animation: {
        "float-left": "float-left 40s linear infinite",
        "float-right": "float-right 40s linear infinite",
      },
    },
  },
  plugins: [],
};