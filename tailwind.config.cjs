const config = {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

  darkMode: "class",

  theme: {
    extend: {
      screens: {
        "3xl": "1740px",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
}

module.exports = config
