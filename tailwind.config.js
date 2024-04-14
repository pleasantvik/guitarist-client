/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const defaultColors = require("tailwindcss/colors");

const customColors = {
  primary: {
    main: "#cf711f",

    bcg: "#272723",
    bcga: "#82828287",
    yellow: "#ffd43b",
    light: "#fdf2e9",
    light2: "#fae5d3",
    "main-light": "#eb984e",
    brown: "#45260a",
    text: "#555",
    faint: "#ddd",
    green: "#51cf66",
    lemon: "#94d82d",
    white: "#fff",
    white2: "#f7f7f7",
  },
  secondary: {
    "light-1": "#E6F2FF",
  },
  tertiary: {
    main: "#FF8A00",
    "light-1": "#FFF3E6",
  },
  dark: {
    text: "#15100b",
    main: "#55412e",
    alpha: "#55412e22",
  },
  danger: {
    main: "#cf142b",
    light: "#f0b6bd",
  },
  disableState: "#ccccff",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        ...customColors,
      },
    },
  },
  plugins: [],
};

//  dark: {
//         DEFAULT: "#151922",
//         main: "#42454e",
//         light: "#7F7B86",
//         muted: "#BBB8BE",
//         gray: "#E4E8E2",
//       },
//       danger: {
//         DEFAULT: "#F74912",
//         light: "#F60000",
//         accent: "#FF6565",
//       },
//       info: {
//         DEFAULT: "#396DF2",
//         yellow: "#F2C70D",
//       },
//       piechat: {
//         direct: "#0088FE",
//         other: "#00C49F",
//         paid: "#FFBB28",
//         social: "#FF8042",
//       },
