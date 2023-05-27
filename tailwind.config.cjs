/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'light-beige': '#eae4dc',
      'light-gray': '#D9D9D9',
      'dark-blue': '#27549c',
      'dark-gray': '#1C1C1C',
      'dark-liver': '#515151',
      'gray': '#2B2B2B',
      purple: '#F0F',
      green: '#14BB14',
      white: '#FFF',
      black: '#000',
      blue: '#4287f5',
      alto: '#e0e0e0',
      concrete: '#f2f2f2',
      'black-opac': '#0008'
    }
  },
  plugins: []
}
