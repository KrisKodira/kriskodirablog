import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MDPageTemplate = ({ data }) => {

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  let lang = "en";

  if(frontmatter.title == "Privacy" || frontmatter.title == "Imprint"){
    lang = "de";
  }

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        lang={lang}
      />
      <div className="content-wrap">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
      }
    }
  }
`

export default MDPageTemplate