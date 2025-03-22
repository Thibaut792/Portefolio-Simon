// Example `tailwind.config.js` file
const path = require("path");

module.exports = {
    content: [
        path.resolve(__dirname, "assets", "**", "*.css"),
        path.resolve(__dirname, "templates", "**", "*.html"),
    ],
    theme: {
        colors: {
            primary:{
                DEFAULT: "#000",
                alt: "#d9d9d9"
            },
            secondary: {
                DEFAULT: "#FFF",
            },
            tertiary: {
                DEFAULT: "#424f79"
            },
        },
        screens: {
            xl: "1360px"
        }
    }
}