import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        latin: ["var(--font-redhat-display)"],
      },
      colors: {
        "jep-green": "#43FE72",
      },
    },
  },
  plugins: [],
} satisfies Config;
