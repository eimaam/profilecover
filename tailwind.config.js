/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: '1rem',
        md: 'calc(1rem - 2px)',
        sm: 'calc(1rem - 4px)',
      },
      fontFamily: {
        baiJamjuree: ['"Bai Jamjuree"', 'sans-serif'],
      },
      colors: {
        background: '#121214',
        foreground: '#fafafa',
        card: {
          DEFAULT: '#1b1b1d',
          foreground: '#fafafa',
        },
        primary: {
          DEFAULT: '#f8c4dc',
          foreground: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#1b1b1d',
          foreground: '#fafafa',
        },
        muted: {
          DEFAULT: '#28282c',
          foreground: '#a5a5a6',
        },
        accent: {
          DEFAULT: '#28282c',
          foreground: '#fafafa',
        },
        destructive: {
          DEFAULT: '#7d2b2b',
          foreground: '#fafafa',
        },
        border: '#28282c',
        input: '#28282c',
        ring: '#d5d5d6',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addBase }) {
      addBase({
        // Light mode overrides
        ':root:not(.dark)': {
          '--background': '#ffffff',
          '--foreground': '#1a1a1a',
          '--card': '#ffffff',
          '--card-foreground': '#1a1a1a',
          '--primary': '#1a1a1a',
          '--primary-foreground': '#ffffff',
          '--secondary': '#f5f5f5',
          '--secondary-foreground': '#1a1a1a',
          '--muted': '#f5f5f5',
          '--muted-foreground': '#737373',
          '--accent': '#f5f5f5',
          '--accent-foreground': '#1a1a1a',
          '--destructive': '#ff4444',
          '--destructive-foreground': '#ffffff',
          '--border': '#e5e5e5',
          '--input': '#e5e5e5',
          '--ring': '#1a1a1a',
        }
      })
    }
  ],
};