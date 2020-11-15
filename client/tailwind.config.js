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
        "discounts-bg-1":
          "url('components/Discounts/images/discounts-bg-1.jpg')",
        "discounts-bg-2":
          "url('components/Discounts/images/discounts-bg-2.jpg')",
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
      textOpacity: {
        60: "0.6",
      },
    },
  },
  variants: {},
  plugins: [],
};
