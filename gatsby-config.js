module.exports = {
  // https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#flags
  flags: {
    // DEV_WEBPACK_CACHE: true,
  },

  siteMetadata: {
    title: `title`,
    description: `description`,
    author: `@gatsbyjs`,
    // author: {
    //   name: `Viktor Khotimchenko`,
    //   summary: `Typescript and Javascript developer`,
    // },
    // siteUrl: `https://mrv1k.me`,
    // social: {
    //   twitter: `mrv1k_`,
    // },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `manifest name`,
        short_name: `manifest short`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
        icon:
          process.env.NODE_ENV === "development"
            ? `src/images/favicon-dev.png`
            : `src/images/favicon.png`,
      },
    },
    // `gatsby-plugin-gatsby-cloud`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
