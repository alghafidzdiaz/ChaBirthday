/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff4ead",
        "primary-dark": "#b60074",
        background: "#fef8fa",
        surface: "#ffffff",
        accent: "#8422dc",
        neutral: "#2b0b49",
        secondary: "#ffb7e0",
      },
      fontFamily: {
        display: ["Anybody", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px rgba(132,34,220,1)",
        "pixel-lg": "8px 8px 0px 0px rgba(132,34,220,1)",
        "pixel-pink": "4px 4px 0px 0px rgba(255,78,173,1)",
        "pixel-up": "0px -4px 0px 0px rgba(132,34,220,1)",
      },
      borderRadius: {
        DEFAULT: "0px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        shake: {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "20%": { transform: "translate(-3px,3px) rotate(-3deg)" },
          "40%": { transform: "translate(3px,-3px) rotate(3deg)" },
          "60%": { transform: "translate(-3px,-3px) rotate(-2deg)" },
          "80%": { transform: "translate(3px,3px) rotate(2deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.3)" },
        },
      },
      animation: {
        float: "float 2.5s ease-in-out infinite",
        blink: "blink 1s steps(1) infinite",
        shake: "shake 0.4s linear",
        twinkle: "twinkle 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
