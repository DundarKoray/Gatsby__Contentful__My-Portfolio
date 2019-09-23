// exports.createPages = ({ graphql, actions }) => {
//   const { createRedirect } = actions
//   createRedirect({
//     fromPath: '/',
//     toPath: '/en/',
//     isPermanent: true,
//     redirectInBrowser: true,
//   })
// }

const path = require("path")

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const {
    data: {
      allContentfulBlogPost: { edges: posts },
    },
  } = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  posts.forEach(({ node }) => {
    const { slug } = node
    createPage({
      path: `/blog/${slug}`,
      component: blogTemplate,
      context: {
        slug: slug,
      },
    })
  })
}
