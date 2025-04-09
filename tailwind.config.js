/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",  // Certifique-se de que o Tailwind vai analisar todos os arquivos em src
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],  // Configura a fonte padrão como Roboto
        },
        colors: {
          customGray: 'rgb(194,11,11)', // Cor personalizada
        },
      },
    },
    plugins: [],
  }
  