import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B0F13',
          600: '#4B5563',
          100: '#E5E7EB',
        },
        surface: {
          base: '#F7F8FA',
          card: '#FFFFFF',
        },
        accent: {
          primary: '#2563EB',
          'primary-hover': '#1D4ED8',
          'primary-weak': '#EFF6FF',
          secondary: '#2EC4B6',
          'secondary-hover': '#26AFA2',
          'secondary-weak': '#E6FBF8',
        },
        state: {
          success: '#16A34A',
          error: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['General Sans', 'Sora', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-h1': ['clamp(3rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-subhead': ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.65' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'button': ['1rem', { fontWeight: '600' }],
        'eyebrow': ['0.875rem', { lineHeight: '1.4' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'heart-beat': 'heartbeat 1.5s ease-in-out infinite',
        'underline-draw': 'underline-draw 600ms ease-out forwards',
        'fade-up': 'fade-up 600ms ease-out forwards',
        'slide-up': 'slide-up 600ms ease-out forwards',
        'spring-in': 'spring-in 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'draw-stroke': 'draw-stroke 800ms ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-6px)' },
          '50%': { transform: 'translateY(6px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'underline-draw': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spring-in': {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'draw-stroke': {
          '0%': { strokeDasharray: '0 100' },
          '100%': { strokeDasharray: '100 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
