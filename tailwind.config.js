// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkStart: '#0f172a',
        darkMid: '#1e293b',
        darkEnd: '#2e3a59',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom right, #0f111a, #1e293b, #2c3e50)',
        'section-gradient': 'linear-gradient(to right, #0f172a, #1e293b, #2e3a59)',
      },
    },
  },
  plugins: [],
}
