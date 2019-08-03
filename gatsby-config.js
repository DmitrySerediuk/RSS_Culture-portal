/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ofplwpwsjc9t',
        accessToken: '__JOGauoVo5zrBOSVTqNr1mcGHrSFz3sYKLmhzMiDBM',
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
        path: `${__dirname}/locale`,
        name: 'locale',
      },
    },
    {
      resolve: '@wapps/gatsby-plugin-lingui',
      options: {
        availableLngs: ['en', 'by', 'ru'],
        fallbackLng: 'en',
        siteUrl: 'http://sochi-rio.ru/1/',
      },
    },
  ],
};
