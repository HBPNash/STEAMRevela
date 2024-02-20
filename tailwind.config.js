/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#76ABE4',
        headings: '#3382D6',
        highlights: '#578EC9',
        neutralbg: '#95a5a6',
        artelements: '#e74c3c',
        graphelements: '#e67e22',
        colorg1: '#89f7fe',
        colorg2: '#66a6ff',
        colorg3: '#4a00e0',
        colorg4: '#ff6b6b',
        colorg5: '#ffd166',
        colorg6: '#45aaf2'
      },
      
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
      },
    },
  },
}
