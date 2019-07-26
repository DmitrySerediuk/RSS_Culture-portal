/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ofplwpwsjc9t`,
        accessToken: `__JOGauoVo5zrBOSVTqNr1mcGHrSFz3sYKLmhzMiDBM`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'users',
        path: `${__dirname}/src/data`,
      },
    },
  ],
}