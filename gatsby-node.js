const path = require('path')

exports.createPages = async ({ page, actions, graphql }) => {
  const { createPage } = actions;

  const indexUserTemplate = path.resolve('./src/pages/user.js');

  await graphql(`{
    allContentfulArchitects {
      distinct(field: path)
    }
  }`)
    .then((res) => {
      res.data.allContentfulArchitects.distinct.forEach((user) => {
        createPage({
          path: `/user/${user}`,
          component: indexUserTemplate,
          context: {
            pathname: user,
          }
        })
      });
    });
}
