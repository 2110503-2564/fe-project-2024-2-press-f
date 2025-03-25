/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'text': '#040316',
        'background': '#f3f1ef',
        'primary': '#5c10a2',
        'secondary': '#ebdbff',
        'accent': '#7972f3',
        'signinbg': '#161b22',
        'registermenu': '#0d1117',
       },
    },
  },
  plugins: [],
}

