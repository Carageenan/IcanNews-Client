module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c5d845",

          secondary: "#bce273",

          accent: "#87d315",

          neutral: "#302334",

          "base-100": "#E8E4EC",

          info: "#7B93F4",

          success: "#14804E",

          warning: "#F29A0D",

          error: "#EE596A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
