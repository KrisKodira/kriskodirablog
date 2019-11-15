import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPreview from "../components/news-preview";
import Paginate from "../components/paginate"
import("../sass/layout.sass")

class BlogIndex extends React.Component {
  render() {
    const data = this.props
    const posts = data.pageContext.group

    return (
      
      <Layout location={this.props.location}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          node.featurePage = false;
          return <NewsPreview article={node} />
        })}

        {/* <Paginate pageNum={data.pageContext.pageCount} props={this.props} /> */}
      </Layout>
    )
  }
}

export default BlogIndex
