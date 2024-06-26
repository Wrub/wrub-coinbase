/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '2.5rem'
            }
        },
        extend: {
            colors: {
                'main-blue': '#2063ec',
                'columbia-blue': '#9bddff'
            }
        }
    },
    plugins: []
}
