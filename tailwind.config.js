/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4A90E2',
        'earth-clay': '#D4A373',
        'accent-green': '#A8D5BA',
        'bg-paper': '#F9F9F9',
        'text-slate': '#1E293B',
      },
      fontFamily: {
        'heading': ['Merriweather', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
