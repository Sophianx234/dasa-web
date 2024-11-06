/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:'Rethink Sans,sans-serif'
    },
    extend: {
      fontFamily:{

        nato: 'Nato Sans',
        rethink: 'Rethink Sans',
        mulish: 'Mulish',
        poppins: 'Poppins',
        Montserrat: 'Montserrat'
      },
      colors: {
        primary: '#FEF3E7',
      }
    },
  },
  plugins: [],
}

