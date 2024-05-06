/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Roboto Flex", "sans-serif"]
      },
      colors:{
        warning:"#ff5800",
        primary:"#376ebe"
      },
      backgroundImage:{
        'hero': "url('/images/outline.png')",
        'scholar':"url('/images/Scholarship_homepage.jpg')"
      },
      height: {
        "h-good": "678px"
      }
    },
  },
  plugins: [],
}

