module.exports = {
  siteMetadata: {
    title: `Jovanovska Jovana`,
    siteUrl: 'https://jovanovskajovana.com',
    description: 'Personal Website',
    author: `Jovanovska Jovana`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
