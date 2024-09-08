/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors');

export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{css, scss, sass}',
  ],
  theme: {
    extend: {
      // ["mt-blue"]: {
      //   light: "#1e88e5",
      //   accent: "#1565c0",
      //   dark: "#0d47a1",
      //   darker: "#002171",
      //   content: "#ffffff",
      // },
      // ["mt-red"]: {
      //   light: "#e53935",
      //   accent: "#c62828",
      //   dark: "#b71c1c",
      //   darker: "#7f0000",
      //   content: "#ffffff",
      // },
      // ["mt-green"]: {
      //   light: "#43a047",
      //   accent: "#2e7d32",
      //   dark: "#1b5e20",
      //   darker: "#003300",
      //   content: "#ffffff",
      // },
      // ["mt-yellow"]: {
      //   light: "#fbc02d",
      //   accent: "#f9a825",
      //   dark: "#f57f17",
      //   darker: "#ff6f00",
      //   content: "#000000",
      // },
      // ["mt-orange"]: {
      //   light: "#fb8c00",
      //   accent: "#f57c00",
      //   dark: "#ef6c00",
      //   darker: "#e65100",
      //   content: "#ffffff",
      // },
      // ["mt-pink"]: {
      //   light: "#d81b60",
      //   accent: "#c2185b",
      //   dark: "#ad1457",
      //   darker: "#880e4f",
      //   content: "#ffffff",
      // },
      // ["mt-purple"]: {
      //   light: "#8e24aa",
      //   accent: "#7b1fa2",
      //   dark: "#6a1b9a",
      //   darker: "#4a148c",
      //   content: "#ffffff",
      // },
      // ["mt-indigo"]: {
      //   light: "#3949ab",
      //   accent: "#303f9f",
      //   dark: "#283593",
      //   darker: "#1a237e",
      //   content: "#ffffff",
      // },
      // ["mt-cyan"]: {
      //   light: "#00acc1",
      //   accent: "#0097a7",
      //   dark: "#00838f",
      //   darker: "#006064",
      //   content: "#ffffff",
      // },
      // ["mt-teal"]: {
      //   light: "#00897b",
      //   accent: "#00796b",
      //   dark: "#00695c",
      //   darker: "#004d40",
      //   content: "#ffffff",
      // },
      // ["mt-lime"]: {
      //   light: "#cddc39",
      //   accent: "#c0ca33",
      //   dark: "#afb42b",
      //   darker: "#827717",
      //   content: "#000000",
      // },
    },
  },
  plugins: [
    createThemes({
      blue: {
        light: "#BBD6FD",
        accent: "#E2EEFF",
        dark: "#4382EC",
        darker: "#3569b2",
        content: "#1b3041",
      },
      red: {
        light: "#FFCDD2",
        accent: "#ffe7e7",
        dark: "#EC4343",
        darker: "#B23535",
        content: "#411B1B",
      },
      yellow: {
        light: "#edea8c",
        accent: "#fff2c2",
        dark: "#f4d837",
        darker: "#CCA243",
        content: "#5B5428",
      },
      green: {
        light: "#C7E4C7",
        accent: "#E1F1E1",
        dark: "#5CBA5C",
        darker: "#458245",
        content: "#1B411B",
      },
      cyan: {
        light: "#9bffff",
        accent: "#d5ffff",
        dark: "#00CED1",
        darker: "#5E9CA0",
        content: "#08354B",
      },
      pink: {
        light: "#F9C8D6",
        accent: "#FFEBF2",
        dark: "#EC5E78",
        darker: "#B24B64",
        content: "#411B28",
      },
      orange: {
        light: "#FFD8B2",
        accent: "#FFEDD5",
        dark: "#EC844D",
        darker: "#B26D3E",
        content: "#412B1E",
      },
      purple: {
        light: "#DAC2E8",
        accent: "#E9E2F3",
        dark: "#9563B5",
        darker: "#724B8F",
        content: "#2D1B3E",
      },
      dark: {
        light: "#000000",
        accent: "#323232",
        dark: "#505050",
        darker: "#ffffff",
        content: "#FFFFFF",
      },
    }),
  ],
}

