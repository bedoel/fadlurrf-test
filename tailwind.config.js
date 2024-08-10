/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'blog.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1c1917',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens:{
        '2xl': '1320px',
      },
      backgroundImage: {
        'blog1': "url('/src/img/blog1.jpg')",
      }
    },
  },
  plugins: [],
}
