/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
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
        border: "hsl(0 0% 89.8%)",
        borderDark: "hsl(215 20.2% 65.1%)",
        input: "hsl(0 0% 89.8%)",
        inputDark: "hsl(215 22% 20%)",
        ring: "hsl(0 72.2% 50.6%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(0 0% 3.9%)",
        backgroundDark: "hsl(210 21% 5%)",
        foregroundDark: "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "hsl(0 72.2% 50.6%)",
          foreground: "hsl(0 85.7% 97.3%)",
        },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        //   border: "hsl(var(--card-border))",
        // },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
}

