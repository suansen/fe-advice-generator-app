module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(193, 38%, 86%)",
        "primary-green": "hsl(150, 100%, 66%)",
        "neutral-blue": "hsl(217, 19%, 38%)",
        "neutral-dark-grayish-blue": "hsl(217, 19%, 24%)",
        "neutral-dark-blue": "hsl(218, 23%, 16%)"
      },
      fontFamily: {
        manrope: ["Manrope", "serif"]
      }
    }
  },
  plugins: []
};
