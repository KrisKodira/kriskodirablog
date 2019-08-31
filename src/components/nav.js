import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

function Nav() {
  
  const [isExpanded, toggleExpansion] = useState(false);

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
            <Link to="/">
              <div className="logo">
                KrisKodira
              </div>
            </Link>
            <ul style={{ display: "flex", flex: 1 }}>
              <li className={`${ isExpanded ? `block` : `hidden` } mobileNav`} onClick={() => toggleExpansion(!isExpanded)}>Menu</li>
              {data.site.siteMetadata.menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                  }}
                >
                  <Link to={link.link} activeClassName="active">
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


