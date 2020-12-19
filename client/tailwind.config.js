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
        "discounts-bg-1":
          "url('components/Discounts/images/discounts-bg-1.jpg')",
        "discounts-bg-2":
          "url('components/Discounts/images/discounts-bg-2.jpg')",
        "header-bg-1":
          "url('components/Header/images/bg-1.jpg')",
        "header-bg-2":
          "url('components/Header/images/bg-2.jpg')",
        "header-bg-3":
          "url('components/Header/images/bg-3.jpg')",
        "header-bg-4":
          "url('components/Header/images/bg-4.jpg')",
      }),
      colors: {
        brown: "#ca9d56",
        grey: "#393937",
        carbonic: "#3D3D3D",
        smoke: "#FFFFFF99",
        gold: "#ca9d56",
        goldHover: "#ebba6b",
      },
      backgroundColor: (theme) => ({
        primary: "#393937",
        secondary: "#564038",
        third: "#ca9d56",
        fourth: "#f5f5f5",
        btnGold: "#ca9d56",
      }),
      borderColor: theme => ({
        light: "#d4d4d4",
        gold: "#ca9d56",
      }),
      textOpacity: {
        60: "0.6",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    borderColor: ["active"],
  },
  plugins: [],
};
