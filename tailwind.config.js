/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        forge: {
          orange: "#F97316",
          orangeHover: "#FB923C",
          orangeDeep: "#EA580C",
          bg: "#020617",
          panel: "#0F172A",
          border: "#1E293B",
          borderHover: "#334155",
          text: "#F1F5F9",
          muted: "#94A3B8",
          subtle: "#CBD5E1",
          sky: "#38BDF8",
          emerald: "#34D399",
          violet: "#8B5CF6"
        }
      }
    }
  },
  plugins: []
}
