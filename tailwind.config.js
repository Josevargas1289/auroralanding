/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          info: 'var(--brand-info)',
        },
        success: 'var(--brand-success)',
        warning: 'var(--brand-warning)',
        error: 'var(--brand-error)',
        accent: {
          1: 'var(--accent-1)',
          2: 'var(--accent-2)',
          3: 'var(--accent-3)',
          4: 'var(--accent-4)',
          5: 'var(--accent-5)',
        },
        surface: {
          bg: 'var(--surface-bg)',
          contrast: 'var(--surface-contrast)',
          sidebar: 'var(--surface-sidebar)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        border: {
          subtle: 'var(--border-subtle)',
        },
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.05)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
