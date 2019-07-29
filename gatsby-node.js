onst languages = require('./src/locale/languages.json');
const path = require('path')


// Create dinamic routes 
//  /{lang}
//  /{lang}/search
//  /{lang}/search/{username}


// exports.createPages = async ({ page, actions, graphql }) => {
//   const { createPage } = actions;
//   console.log(page);

//   const indexPageTemplate = path.resolve('./src/pages/index.js');
//   const indexSearchTemplate = path.resolve('./src/pages/search.js');
//   const indexUserTemplate = path.resolve('./src/pages/user.js');

//   await graphql(`{
//     allFile(filter: {sourceInstanceName: {eq: "users"}}) {
//       distinct(field: relativeDirectory)
//     }
//   }`)
//     .then((res) => {

//       Object.keys(languages).forEach(lang => {
//         res.data.allFile.distinct.forEach((user) => {
//           createPage({
//             path: `${lang}/search/${user}`,
//             component: indexUserTemplate,
//             context: {
//               lang: lang,
//             }
//           })
//         });

//         createPage({
//           path: lang,
//           component: indexPageTemplate,
//           context: {
//             lang: lang,
//           }
//         });

//         createPage({
//           path: `${lang}/search`,
//           component: indexSearchTemplate,
//           context: {
//             lang: lang,
//           }
//         });
//       });
//     });
// }
