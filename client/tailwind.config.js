module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "offer-photo": "url('components/Offer/images/offer-photo.jpg')",
      }),
      colors: {
        brown: "#ca9d56",
        grey: "#393937",
      },
      backgroundColor: (theme) => ({
        primary: "#393937",
        secondary: "#564038",
        third: "#ca9d56",
        fourth: "#f5f5f5",
      }),
    },
  },
  variants: {},
  plugins: [],
};
