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
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        brand: {
          green: '#22C55E',
          greenD: '#16A34A',
          greenL: '#4ADE80',
          blue: '#0EA5E9',
          blueD: '#0284C7',
          blueL: '#38BDF8',
          red: '#EF4444',
          redD: '#DC2626',
          orange: '#F97316',
          orangeD: '#EA580C',
          gold: '#EAB308',
          goldL: '#FDE047',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'blink': 'blink 2s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'wa-pulse': 'waPulse 2.5s ease-in-out infinite',
        'circuit': 'circuit 4s linear infinite',
        'slide-in': 'slideIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.2' } },
        shimmer: { '0%': { backgroundPosition: '-400% center' }, '100%': { backgroundPosition: '400% center' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        waPulse: {
          '0%,100%': { boxShadow: '0 4px 24px rgba(34,197,94,0.55), 0 0 0 0 rgba(34,197,94,0.35)' },
          '50%': { boxShadow: '0 4px 24px rgba(34,197,94,0.55), 0 0 0 12px rgba(34,197,94,0)' },
        },
        circuit: { '0%': { strokeDashoffset: '600' }, '100%': { strokeDashoffset: '0' } },
        slideIn: { from: { opacity: '0', transform: 'translateX(-20px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
      },
      backgroundSize: {
        '300%': '300% auto',
      },
    },
  },
  plugins: [],
}
