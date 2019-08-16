import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

function Nav() {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {data.site.siteMetadata.menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </React.Fragment>
      )}
    />
  )
}

export default Nav


