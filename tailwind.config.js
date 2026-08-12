/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b7a57',
        'primary-dark': '#1c5a42',
        'primary-mid': '#1f704b',
        accent: '#159e6b',
        'accent-mid': '#389e73',
        'bg-soft': '#fafef9',
        'bg-light': '#f1f9f4',
        'bg-card': '#e4f3ec',
        'bg-pale': '#eef7f2',
        footer: '#153e30',
        'footer-text': '#c0dfd1',
        border: '#cfe3d9',
        'border-light': '#ddebe4',
      },
      fontFamily: {
        heading: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(27, 90, 66, 0.07)',
        'card-hover': '0 12px 40px rgba(27, 90, 66, 0.14)',
      },
    },
  },
  plugins: [],
}
