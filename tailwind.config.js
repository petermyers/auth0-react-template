module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        header: "65px",
      },
      text: {
        blue: "#3d68ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
