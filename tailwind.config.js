const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    // Your existing theme configuration...
    extend: {
      // Your existing keyframes and animations...
    },
  },
  plugins: [
    // This custom plugin is the bridge between shadcn/ui and tw-animate-css
    plugin(function({ addVariant }) {
      // Variant for when a Radix component is open
      addVariant('open', '&[data-state="open"]')
      
      // Variant for when a Radix component is closed
      addVariant('closed', '&[data-state="closed"]')
      
      // Variants for Radix motion (used by Navigation Menu)
      addVariant('motion-from-start', '&[data-motion="from-start"]')
      addVariant('motion-from-end', '&[data-motion="from-end"]')
      addVariant('motion-to-start', '&[data-motion="to-start"]')
      addVariant('motion-to-end', '&[data-motion="to-end"]')
    })
  ],
}