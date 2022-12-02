const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type { import('tailwindcss').Config } */

tailwindConfig = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'clr-text-primary': '#262626',
            },
            fontFamily: {
                inter: ['var(--inter-font)', ...fontFamily.sans],
                quiche: ['var(--quiche-font)', ...fontFamily.sans],
                clashDisplay: ['var(--clashDisplay-font)', ...fontFamily.sans],
                satoshi: ['var(--satoshi-font)', ...fontFamily.sans],
            },
            fontSize: {
                '10xl': ['10rem', { lineHeight: '1' }],
            },
            screens: {
                '2xl': '1537px',
            }
        },
    },
    plugins: [],
}

module.exports = tailwindConfig;