import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Nav from "./nav"
import Bio from "./bio"
import Newsletter from "./newslettersignup"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(48),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header><Nav /></header>
        <main>{children}</main>
        <footer>
          <div>
            <Bio />
            <p><Link to="/privacy-policy">Datenschutzerklärung</Link> | <Link to="/imprint">Impressum</Link></p>
            <p>
              © {new Date().getFullYear()}, made by KrisKodira
            </p>
          </div>

          <Newsletter />
        </footer>
      </div>
    )
  }
}

export default Layout
