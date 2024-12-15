/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // Path to your HTML file
    "./src/**/*.{js,jsx,ts,tsx}",  // Paths to your JavaScript/JSX/TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font family
      },
      animation: {
        'custom-bounce': 'custom-bounce 1s infinite ease-in-out', // Custom bounce animation
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)', // Starting and ending point
          },
          '50%': {
            transform: 'translateY(-2px)', // Bounce height, adjust to change bounce intensity
          },
          '80%': {
            transform: 'translateY(-1px)', // Bounce height, adjust to change bounce intensity
          },
        },
      },
    },
  },
  plugins: [],
}
