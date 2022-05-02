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
            dark: 'rgba(0,0,0,0.8)',
        },
        keyframes: {
            slideLeft: {
                '0%': { transform: 'translateX(200px)', opacity: 0 },
                '100%': { transform: 'translateX(0)', opacity: 1 },
            },
            slideRight: {
                '0%': { transform: 'translateX(-200px)', opacity: 0 },
                '100%': { transform: 'translateX(0)', opacity: 1 },
            },
            slideUp: {
                '0%': { transform: 'translateY(200px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
            },
        },
        animation: {
            slideLeft: 'slideLeft 1s ease-in-out',
            slideRight: 'slideRight 1s ease-in-out',
            slideUp: 'slideUp 1s ease-in-out',
        },
    },
    plugins: [],
};
