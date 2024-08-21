
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
        mainColor: "#682D79",
        secondaryColor: "#A781A9",
        baseColor: '#CCB3CF',
        darkColor: '#232323',
        secondaryYellow: "#EACE6C",
        secondaryGray: "#F3F4F5",
        bgLight: "#F9F2ED"
      }, 
      boxShadow: {
        custom: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
        mainShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        secondaryShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  darkMode: 'class',
  daisyui: {
    themes: ["light", "dark"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
