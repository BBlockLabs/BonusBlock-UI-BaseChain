/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gold: '#F5BF5B',
        goldFaded: '#F9E1B4',
        blue: '#1B6DDF',
        softBlue: '#75A1FF',
        buttonBlue: '#003099',
        grayscaleWhite: '#ECEDEE',
        grayscaleDark: '#6C6A6A',
        "stroke/20": '#EBECFF33',
        accentText: '#A7B0CB',
        accentGrayText: '#A7AEB4',
        accordionBg: '#383B44',
        walletBtnHoverBg: '#121212EB',
        tagBtnBg: '#181A1E',
        cardBg: '#090A0C',
        cardText: '#F1F1F1',
        modalBg: '#414141',
        projectsBg: '#1E1E1EAD',
        statsBg: '#1E20258F',
        icon: '#CBCFD2',
        leaderboardIcon: '#202327',
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'quests': "url('/src/assets/quests/quests_bg.png')",
        'leaderboard': "url('/src/assets/images/leaderboard_bg.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}