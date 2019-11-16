import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPreview from "../components/news-preview";

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  const allCatPosts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={`Posts in category "${category}"`}>
      <SEO title={`Posts in category "${category}"`} />

      {allCatPosts.map(({ node }) => {
        node.featurePage = true;
        if(node.frontmatter.published === true){
          return <NewsPreview article={node} />
        }
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            picture
            title
            description
            category
            featured_post
            published
          }
        }
      }
    }
  }
`

export default CategoryTemplate