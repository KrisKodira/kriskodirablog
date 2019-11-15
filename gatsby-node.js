const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const mdPageTemplate = path.resolve(`./src/templates/markdown-page.js`);
  const blogTemplate = path.resolve(`./src/templates/blog-post.js`);

  // Individual blogs pages
  const blogs = graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/blog/**/*" } }
        sort: { order: DESC, fields: frontmatter___date }
      )
      {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD.MM.YYYY")
              picture
              title
              description
              category
              featured_post
            }
          }
        }
      }
      config: file(absolutePath: {regex: "/content/config.md/"}) {
        childMarkdownRemark {
          frontmatter {
            header
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    createPaginatedPages({
      edges: result.data.blogs.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: 100, // This is optional and defaults to 10 if not used
      pathPrefix: '', // This is optional and defaults to an empty string if not used
      context: {blogs}, // This is optional and defaults to an empty object if not used
    })

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
