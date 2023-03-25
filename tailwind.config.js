const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        screen: {
        'xs': '420px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        },

        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            dasar: '#BDE5D9',
            hijau: '#35BE5C',
            kuning: '#FFAD33',
            orange: '#FF7033',
            abuhitam: '#AD9F9F',
            abu: '#D9D9D9',
            biru: '#71C5F5',
        },

        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
