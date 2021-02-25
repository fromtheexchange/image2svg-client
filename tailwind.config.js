// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      "blue-gray": colors.blueGray,
      "warm-gray": colors.warmGray,
      amber: colors.amber,
      red: colors.red,
    },
    fontFamily: {
      // Tailwind does not automatically escape font names
      // fallback fonts https://www.cssfontstack.com/
      // tailwind fallback fonts https://tailwindcss.com/docs/font-family
      sans:
        '"Silka", ui-sans-serif, "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      mono: '"Silka Mono", ui-monospace, "SFMono-Regular"',
      display:
        '"Salomé", ui-serif, "Didot", "Didot LT STD", "Bodoni MT", "Hoefler Text", "Garamond", "Georgia", "Cambria", "Times New Roman", "Times", serif',
      fine:
        '"Salomé Fine", ui-serif, "Didot", "Didot LT STD", "Bodoni MT", "Hoefler Text", "Garamond", "Georgia", "Cambria", "Times New Roman", "Times", serif',
      stencil:
        '"Salomé Stencil", ui-serif, "Didot", "Didot LT STD", "Bodoni MT", "Hoefler Text", "Garamond", "Georgia", "Cambria", "Times New Roman", "Times", serif',
      deco:
        '"Salomé Deco", ui-serif, "Didot", "Didot LT STD", "Bodoni MT", "Hoefler Text", "Garamond", "Georgia", "Cambria", "Times New Roman", "Times", serif',
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

// Unlike Tailwind, twin.macro only generates styles for the classes so you don’t need to use PurgeCSS.
// https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion#tailwind-config
