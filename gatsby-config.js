/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `v1.2.4`,
    description: `description`,
    author: `@mozart409`,
    siteUrl: `https://www.gct.mozart409.space/`,
  },
  plugins: [
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
};
