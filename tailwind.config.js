// @ts-nocheck
const radixColors = require("@radix-ui/colors");

// Fonction pour transformer les couleurs Radix en format Tailwind
function transformRadixColors(radixColors) {
  const transformedColors = {};
  Object.entries(radixColors).forEach(([colorName, colorShades]) => {
    if (typeof colorShades === "object") {
      transformedColors[colorName] = {};
      Object.entries(colorShades).forEach(([shade, value]) => {
        const newShade = shade.replace(/[a-z]+/, "");
        transformedColors[colorName][newShade] = value;
      });
    }
  });
  return transformedColors;
}

const colors = transformRadixColors(radixColors);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
