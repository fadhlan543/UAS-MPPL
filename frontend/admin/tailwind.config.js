/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        darkblue: {
          "05": "#00CCF4",
          "04": "#0D28A6",
          "03": "#489CFF",
          "02": "#D0B7E6",
          "01": "#E2D4F0",
        },
        limegreen: {
          "05": "#AA9B87",
          "04": "#D4C2A8",
          "03": "#FFE9CA",
          "02": "#FFF0DC",
          "01": "#FFF8ED",
        },
        alert: {
          danger: "#FF0000",
          warning: "#F9CC00",
          success: "#73CA5C",
        },
        neutral: {
          "05": "#151515",
          "04": "#3C3C3C",
          "03": "#8A8A8A",
          "02": "#D0D0D0",
          "01": "#FFFFFF",
        },
        lightblue: {
          "05": "#EBF3FC",
        },
        lightgrey: {
          "05": "#B0B0B0",
        },
        sinow: {
          "05": "#00CCF4",
          "04": "#001C30",
          "03": "#003A64",
        },
      },
      boxShadow: {
        low: "0 0 0 0 rgba(0, 0, 0, 0.15) backdrop-blur-4",
        high: "0 0 0 0 rgba(0, 0, 0, 0.15) backdrop-blur-10",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
