import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

function Nav() {
  
  let state = { showMenu: false }

  let toggleMenu = (event) => {
    function setState() {
      state.showMenu = !state.showMenu
    }
  }

  const menuVis = state.showMenu ? 'show' : 'hide';

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
              <li className={`mobileNav ${menuVis}`} onClick={toggleMenu()}>Menu</li>
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


