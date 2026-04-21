/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfbf7',
        foreground: '#171412',
        primary: {
          DEFAULT: '#3f4f20',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#c79a2f',
          foreground: '#171412',
        },
        accent: {
          DEFAULT: '#eee7dc',
          foreground: '#171412',
        },
        muted: '#f5f0e8'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
