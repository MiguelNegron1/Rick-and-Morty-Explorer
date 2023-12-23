/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(248,195,169,1) 11%, rgba(188,234,231,1) 51%, rgba(223,238,129,1) 92%)',
        'custom-title-gradient': 'linear-gradient(256deg,#c6de41 30%,#61dafb 70%)'
      },
      backgroundClip: {
        text: 'text',
      },
      colors: {
        'custom-yellow': '#ffff87',
        'custom-border': '#e077778a',
        'custom-image-border': '#01344cbf',
        'custom-character-button': '#3D3D3D',
        'about-color': '#c6de41'
      },
      translate: {
        'custom-neg-45': '-45%',
      }
    },
    screens: {
      'sm': '360px',
      'md': '680px',
      'lg': '1000px',
    },
  },
  plugins: [],
}

