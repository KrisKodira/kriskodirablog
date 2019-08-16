const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const mdPageTemplate = path.resolve(`./src/templates/markdown-page.js`);
  const blogTemplate = path.resolve(`./src/templates/blog-post.js`);

  // Individual blogs pages
  const blogs = graphql(`
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/blog/**/*" } }
        sort: { order: DESC, fields: frontmatter___date }
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
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create blog pages
    result.data.blogs.edges.forEach(({node}) => {

      createPage({
        path: node.fields.slug,
        component: blogTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    });
  });

  // Individual docs pages
  const pages = graphql(`
    {
      pages: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/content/pages/*" }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(result => {
    
    if (result.errors) {
      Promise.reject(result.errors);
    }
    // Create doc pages
    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: mdPageTemplate,
      });
    });
  });

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([blogs, pages]);
};

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
