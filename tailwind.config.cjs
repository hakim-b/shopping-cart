/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/App.tsx",
    "./src/pages/About.tsx",
    "./src/pages/Home.tsx",
    "./src/pages/Store.tsx",
    "./src/components/Navbar.tsx",
    "./src/components/StoreItem.tsx",
    "./src/components/ThemeDropdown.tsx",
    "./src/components/ShoppingCart.tsx",
    "./src/components/CartItem.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
