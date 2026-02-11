import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b0c10',
        ash: '#10121a',
        fog: '#dfe6ef',
        gold: '#d3a55f',
        ocean: '#4bb4ff',
        ember: '#ff7a59'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular']
      },
      boxShadow: {
        glow: '0 0 60px rgba(75, 180, 255, 0.25)',
        card: '0 30px 90px rgba(15, 23, 42, 0.18)'
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, rgba(0,0,0,0) 0)' 
      }
    }
  },
  plugins: []
} satisfies Config;
