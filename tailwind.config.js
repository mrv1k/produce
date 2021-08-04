// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "sans-serif",
      serif: "serif",

      title: [
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "'Helvetica Neue'",
        "Arial",
        "'Noto Sans'",
        "sans-serif",
        "'Apple Color Emoji'",
      ],
      body: [
        "'Open Sans'",
        "Roboto",
        "'Droid Sans'",
        "Arial",
        "Helvetica",
        "sans-serif",
      ],
      mono: [
        "'JetBrains Mono'",
        "Consolas",
        "Monaco",
        "'Andale Mono'",
        "'Ubuntu Mono'",
        "monospace",
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
