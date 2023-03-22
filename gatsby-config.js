require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `杏仁弟弟`,
    description: `杏仁豆腐，杏仁茶，阿薩姆奶茶，不一般奶茶，無糖菊花茶。`,
    author: `@jimmyliao`,
    titleTemplate: `%s | 杏仁豆腐`,
    url: `https://gatsby-airtable-design-project.netlify.app/`,
    image: `DSC02579.JPG`,
    // twitterUsername: `@john_smilga`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
