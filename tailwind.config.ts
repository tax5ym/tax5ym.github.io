
import type {Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      fontFamily: {
        body: ['Rajdhani', 'sans-serif'],
        headline: ['Audiowide', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        'float': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(200px, 220px)' },
          '50%': { transform: 'translate(-210px, -200px)' },
          '75%': { transform: 'translate(190px, -210px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'float2': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-220px, 190px)' },
          '50%': { transform: 'translate(200px, -230px)' },
          '75%': { transform: 'translate(-210px, 220px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'float3': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(190px, -210px)' },
          '50%': { transform: 'translate(-220px, 230px)' },
          '75%': { transform: 'translate(230px, 210px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'float4': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-250px, -250px)' },
          '50%': { transform: 'translate(240px, 260px)' },
          '75%': { transform: 'translate(-230px, -240px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'float5': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(260px, -240px)' },
          '50%': { transform: 'translate(-250px, 250px)' },
          '75%': { transform: 'translate(240px, 260px)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'twinkle': 'twinkle 0.5s ease-in-out infinite alternate',
        'float': 'float 12s ease-in-out infinite',
        'float2': 'float2 12s ease-in-out infinite',
        'float3': 'float3 12s ease-in-out infinite',
        'float4': 'float4 18s ease-in-out infinite',
        'float5': 'float5 22s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }),
  ],
} satisfies Config;

    