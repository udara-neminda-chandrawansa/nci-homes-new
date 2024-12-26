/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'left': 'bannermoveleft 15s linear infinite',
      },
      keyframes: {
        bannermoveleft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - (theme(spacing.8) / 2)))' },
        }
      },
    },
  },
  plugins: [
  ],
}