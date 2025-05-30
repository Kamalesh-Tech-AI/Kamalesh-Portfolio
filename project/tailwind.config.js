/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF0000',
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        dark: {
          50: '#E5E5E5',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        neon: {
          red: '#FF073A',
          blue: '#0AEFFF',
          purple: '#B026FF',
          green: '#04FFA5',
        }
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'tech': ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'blink': 'blink 1s step-end infinite',
        'scan-line': 'scan-line 2s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
          '100%': { transform: 'translate(0)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px 0 rgba(255, 0, 0, 0.4)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(255, 0, 0, 0.7)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      }
    },
  },
  plugins: [],
};