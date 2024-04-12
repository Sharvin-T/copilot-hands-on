/** @type {import('tailwindcss').Config} */
const config = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    options: {
      safelist: [], // Specify a list of classes that should not be purged
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
    },
  },
};

export default config;