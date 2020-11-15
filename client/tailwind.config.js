module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  loaders: [{ test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "offer-photo": "url('components/Offer/images/offer-photo.jpg')",
      }),
    },
    backgroundColor: (theme) => ({
      primary: "#393937",
      secondary: "#564038",
      bgBtn: "#ca9d56",
    }),
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
