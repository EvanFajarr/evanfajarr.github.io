module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  darkMode: 'media', // Atur menjadi 'media' atau 'class' jika ingin menggunakan dark mode
  theme: {
    extend: {}, // Tambahan gaya kustom
  },
  variants: {
    extend: {}, // Ekstensi varian, misalnya hover, focus, dsb.
  },
  plugins: [], // Plugin tambahan
}
