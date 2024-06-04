/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        "ul-text":"17px",
        "text-14":"14px"
      },
      height:{
        "0/4":"75px",
        "0/6":"606px",
        "70":"70px",
        "37":"2.296rem",
        "m-60":"90px"
      },
      width:{
        "90":"6.5rem",
        "930":"930px",
        "image-width":"20rem"
      },
      backgroundColor:{
        client:"#CCCCCC"
      },
      
    },
  },
  plugins: [],
}

