require("dotenv").config() //eslint-disable-line

module.exports = {
  siteMetadata: {
    title: `Koray Dündar`,
    description: `I am graduated with a BBA in Innovative Business Services from Satakunta University of Applied Sciences in 2015. Since my graduation I've been constantly learning front end technologies, focusing mainly on JavaScript and its libraries such as React. I've also experience in video & photo production. I am looking for an opportunity where I am able to learn more and improve my coding skills to a further degree. Don't forget to check out my porftfolio and resume!`,
    author: `Koray Dündar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-i18next`,
      options: {
        availableLngs: ["fi", "en"],
        fallbackLng: "fi",
        saveMissing: true,
        debug: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
