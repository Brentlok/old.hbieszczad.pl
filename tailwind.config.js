module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      background: 'var(--color-background)',
      'background-2': 'var(--color-background-2)',
      text: 'var(--color-text)',
      wave: 'var(---color-wave)',
      white: '#fff',
      black: '#000',
      gray: '#ccc',
      primary: '#ff385c',
      transparent: 'rgba(0,0,0,0)',
      dark: 'rgba(0,0,0,0.6)',
    },
  },
  plugins: [],
};
