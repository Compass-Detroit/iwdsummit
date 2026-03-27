import typography from '@tailwindcss/typography'

/** Parent-based light mode (html[data-mode="light"]). Use `light:*` utilities; do not use `[data-mode=light]:*` — that targets elements that carry the attribute, so it never matches. */
function lightModeVariant({ addVariant }) {
  addVariant('light', '[data-mode="light"] &')
}

/** @type {import('tailwindcss').Config} */
export default {
  // Match app ThemeContext (data-mode on <html>), not OS prefers-color-scheme
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'ribbon-organizer',
    'ribbon-facilitator',
    'ribbon-devteam',
    'ribbon-marketing',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        /** Dark focus ring for WCAG contrast; use via focus:ring-focus-ring */
        'focus-ring': 'rgb(var(--iwd-focus-ring) / <alpha-value>)',
        primary: {
          50: '#fefce8',
          100: '#fffac2',
          200: '#fff187',
          300: '#ffe243',
          400: '#ffcb05',
          500: '#efb403',
          600: '#ce8b00',
          700: '#a46204',
          800: '#884c0b',
          900: '#733e10',
          950: '#432005',
          DEFAULT: '#efb403',
        },
        iwd: {
          black: {
            50: 'rgb(var(--iwd-dark-50) / <alpha-value>)',
            100: 'rgb(var(--iwd-dark-100) / <alpha-value>)',
            200: 'rgb(var(--iwd-dark-200) / <alpha-value>)',
            300: 'rgb(var(--iwd-dark-300) / <alpha-value>)',
            400: 'rgb(var(--iwd-dark-400) / <alpha-value>)',
            500: 'rgb(var(--iwd-dark-500) / <alpha-value>)',
            600: 'rgb(var(--iwd-dark-600) / <alpha-value>)',
            700: 'rgb(var(--iwd-dark-700) / <alpha-value>)',
            800: 'rgb(var(--iwd-dark-800) / <alpha-value>)',
            900: 'rgb(var(--iwd-dark-900) / <alpha-value>)',
            950: 'rgb(var(--iwd-dark-950) / <alpha-value>)',
            DEFAULT: 'rgb(var(--iwd-dark-950) / <alpha-value>)',
          },
          red: {
            50: '#fff5f5',
            100: '#ffe3e0',
            200: '#ffc7c2',
            300: '#ffa094',
            400: '#ff7a6b',
            500: '#f65a4b',
            600: '#e13d2f',
            700: '#be3024',
            800: '#9c2c22',
            900: '#822b23',
            950: '#46120d',
            DEFAULT: '#e13d2f',
          },
          green: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
            950: '#042f2e',
            DEFAULT: '#0f766e',
          },
          /** Named "gold" historically; values come from --iwd-accent-* (brand accent — mint in 2026 default, theme-dependent). */
          gold: {
            50: 'rgb(var(--iwd-accent-50) / <alpha-value>)',
            100: 'rgb(var(--iwd-accent-100) / <alpha-value>)',
            200: 'rgb(var(--iwd-accent-200) / <alpha-value>)',
            300: 'rgb(var(--iwd-accent-300) / <alpha-value>)',
            400: 'rgb(var(--iwd-accent-400) / <alpha-value>)',
            500: 'rgb(var(--iwd-accent-500) / <alpha-value>)',
            600: 'rgb(var(--iwd-accent-600) / <alpha-value>)',
            700: 'rgb(var(--iwd-accent-700) / <alpha-value>)',
            800: 'rgb(var(--iwd-accent-800) / <alpha-value>)',
            900: 'rgb(var(--iwd-accent-900) / <alpha-value>)',
            950: 'rgb(var(--iwd-accent-950) / <alpha-value>)',
            DEFAULT: 'rgb(var(--iwd-accent-400) / <alpha-value>)',
          },
          neutral: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
            DEFAULT: '#f8fafc',
          },
        },
      },
      fontFamily: {
        heading: ['var(--iwd-font-heading)', 'serif'],
        body: ['var(--iwd-font-body)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'inherit',
            '--tw-prose-headings': 'inherit',
            '--tw-prose-lead': 'inherit',
            '--tw-prose-links': 'inherit',
            '--tw-prose-bold': 'inherit',
            '--tw-prose-counters': 'inherit',
            '--tw-prose-bullets': 'inherit',
            '--tw-prose-hr': 'inherit',
            '--tw-prose-quotes': 'inherit',
            '--tw-prose-quote-borders': 'inherit',
            '--tw-prose-captions': 'inherit',
            '--tw-prose-code': 'inherit',
            '--tw-prose-kbd': 'inherit',
          },
        },
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [typography, lightModeVariant],
}
