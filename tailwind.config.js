/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                'main-blue': '#2063ec'
            }
        }
    },
    plugins: []
}
