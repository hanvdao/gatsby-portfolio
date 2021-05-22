module.exports = {
  siteMetadata: {
    title: `Han Dao`,
    description: `CS Undergraduate @ Stanford`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAeBGm53NpbFe7LuqfgqBtMkEgdt1o3EHk",
          authDomain: "han-dao-portfolio.firebaseapp.com",
          projectId: "han-dao-portfolio",
          storageBucket: "han-dao-portfolio.appspot.com",
          messagingSenderId: "997425492145",
          appId: "1:997425492145:web:032d6027067fe3e532f290",
          measurementId: "G-T1WDNDLQ69",
        },
        loginPath: "/login",
        loginRedirectPath: "/dashboard",
        socialLogins: ["google"],
      },
    },
  ],
}
