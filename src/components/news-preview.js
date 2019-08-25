import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Image from '../components/image';

const NewsPreview = ({ article }) => {
  const title = article.frontmatter.title || article.fields.slug

  return (!!article.frontmatter.featured_post || !!article.featurePage) &&
    (<article key={article.fields.slug} >
      <div className="articleImage">
        <Image alt="Post Image" filename={article.frontmatter.picture} />
      </div>

      <div>
        <Link style={{ boxShadow: `none` }} to={article.fields.slug}>
          <small className="articleDate">{article.frontmatter.date}</small>
          <strong className="category">{article.frontmatter.category}</strong>
          <h3>{title}</h3>
          
          <p
            dangerouslySetInnerHTML={{
              __html: article.frontmatter.description || article.excerpt,
            }}
          />   
        </Link>     
      </div>
    </article>)
}

export default NewsPreview
