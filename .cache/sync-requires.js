const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-theme-firebase-src-pages-login-tsx": hot(preferDefault(require("C:\\Users\\handa\\OneDrive\\Desktop\\gatsby-portfolio\\my-portfolio\\node_modules\\gatsby-theme-firebase\\src\\pages\\login.tsx"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\handa\\OneDrive\\Desktop\\gatsby-portfolio\\my-portfolio\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\handa\\OneDrive\\Desktop\\gatsby-portfolio\\my-portfolio\\src\\pages\\index.js")))
}

