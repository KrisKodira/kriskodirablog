import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Image from '../components/image';

const NewsPreview = ({ article }) => {
  const title = article.frontmatter.title || article.fields.slug

  return (!!article.frontmatter.featured_post || !!article.featurePage) &&
    (<div key={article.fields.slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={article.fields.slug}>
          {title}
        </Link>
      </h3>
      <small>{article.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: article.frontmatter.description || article.excerpt,
        }}
      />
      <p>Kategorie: {article.frontmatter.category}</p>
      <p>Ort: {article.frontmatter.location}</p>
      <p>Bild: {article.frontmatter.picture} <Image alt="Gatsby in Space" filename={article.frontmatter.picture} /></p>
    </div>)
}

export default NewsPreview
