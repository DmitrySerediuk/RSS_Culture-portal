import dataFilter from './src/components/dataFilter';
const path = require('path')

exports.createPages = async ({ page, actions, graphql }) => {
  const { createPage } = actions;

  const indexUserTemplate = path.resolve('./src/pages/user.js');

  await graphql(`{
    allContentfulArchitects {
      nodes {
        birthDate
        lang
        name
        path
        timeline {
          timeline
        }
        video
        description
      }
      distinct(field: path)
    }
  }`)
    .then((architectors) => {
      architectors.data.allContentfulArchitects.distinct.forEach((pathUser) => {
        // const architectDataFiltered = new dataFilter(architectors.data.allContentfulArchitects.nodes)
        //   .filterByField({ path: pathUser });

        createPage({
          path: `/user/${pathUser}`,
          component: indexUserTemplate,
          context: {
            // multilangData: architectDataFiltered
          }
        })
      });
    });
}
