const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const houseTemplate = path.resolve("./src/Templates/HouseTemplate.js");
  const res = await graphql(`
    query {
      allContentfulHouse {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulHouse.edges.forEach((edge) => {
    createPage({
      component: houseTemplate,
      path: `/homes/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
