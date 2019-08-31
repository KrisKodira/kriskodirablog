import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPreview from "../components/news-preview";
import Image from '../components/image';
import("../sass/layout.sass")

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          node.featurePage = false;
          return <NewsPreview article={node} />
        })}
         
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`
