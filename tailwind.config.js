/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-1": "#999999;",
        "color-1": "rgb(255, 153, 204)",
        "color-2": "rgb(153, 153, 153)",
        "color-3": "rgb(86, 86, 86)",
        "color-4": "#565656",
      },
      fontSize: {
        "xs-slim": [
          "12px",
          {
            lineHeight: "1.2",
            fontWeight: "300",
          },
        ],
        "base-regular": [
          "15px",
          {
            lineHeight: "1.7",
            fontWeight: "400",
          },
        ],
        "sm-regular2": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "sm-regular": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "2xl-slim": [
          "24px",
          {
            lineHeight: "29px",
            fontWeight: "300",
          },
        ],
        introduce: [
          "78px",
          {
            lineHeight: "90px",
            fontWeight: "300",
          },
        ],
        text: [
          "16px",
          {
            lineHeight: "27px",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
