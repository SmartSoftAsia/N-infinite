/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const headlessui = require("@headlessui/tailwindcss");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      "s-3": "3rem",
      ...defaultTheme.borderRadius,
    },
    screens: {
      xs: { max: "320px" },
      "7xs": { min: "321px", max: "390px" },
      "6xs": { min: "391px", max: "418px" },
      "5xs": { min: "419px", max: "445px" },
      "4xs": { min: "446px", max: "498px" },
      "3xs": { min: "499px", max: "567px" },
      "2xs": { min: "567px", max: "684px" },
      "2xl": "1440px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "n-dark-grey": "#2F2F2F",
        "n-yellow": "#FBBF24",
      },
      flex: {
        "1-auto": "1 0 auto",
      },
      backgroundImage: {
        "shakehand-img":
          "url('https://link-2-team-public.s3.ap-southeast-1.amazonaws.com/shakehand.png')",
      },
      boxShadow: {
        bottom: "0 5px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontSize: {
        "1-2xl": "1.2rem",
        "1-4xl": "1.4rem",
        "1-7xl": "1.7rem",
        "2-2xl": "2.2rem",
      },
    },
  },
  plugins: [headlessui, require("tailwindcss-debug-screens")],
});
