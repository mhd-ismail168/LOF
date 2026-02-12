/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Modern Infrastructure Palette
        'brand-dark': '#1e293b', // Slate Navy (Heavy typography, weight)
        'brand-black': '#0f172a', // Deep Slate / Gunmetal
        'brand-light': '#f0f4f8', // Blueprint White (Slight blue tint)
        'brand-accent': '#c2410c', // Copper / Terra Cotta (Raw materials, heat)

        // Sector Colors (Mapped to Punch Colors)
        'sector-infra': '#c2410c', // Copper
        'sector-tech': '#0ea5e9', // Sky Blue (Open, big picture)
        'sector-capital': '#475569', // Concrete Gray (Structural)

        'glass': 'rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'hero-pattern': "none", // Removed to emphasize the clean blueprint base
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-grid': 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', // Adjusted grid for light mode
      },
    },
  },
  plugins: [],
}
