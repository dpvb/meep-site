/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        boom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-11deg)" },
          "50%": { transform: "rotate(11deg)" },
        },
        rainbow: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        }
      },
      animation: {
        "wiggle": "wiggle 2s ease-in-out infinite",
        "boom": "boom 50ms ease-in-out forwards",
        "rainbow": "rainbow 3s ease infinite",
      }
    },
  },
  vriants: {},
  plugins: [
    require('tailwindcss-animate')
  ],
};
