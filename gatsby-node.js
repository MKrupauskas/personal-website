const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

async function createPages(templatePath, query, createPage, graphql) {
  const template = path.resolve(templatePath)
  const result = await graphql(query)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: template,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await createPages(
    './src/templates/blog-post.js',
    `
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog)/.*.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`,
    createPage,
    graphql
  )
  await createPages(
    './src/templates/techbit.js',
    `
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(techbits)/.*.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`,
    createPage,
    graphql
  )
  return null
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
