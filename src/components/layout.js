import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MenuOutlined } from "@ant-design/icons"
import MobileNav from "../components/navBar/MobileNav"
import { Link } from "gatsby"

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <div id="topMenu">
        {/* <h5></h5> */}
        <Link to="/">
          <h3>Turtle Leaf Cafe</h3>
        </Link>
        <MobileNav color="#4C5469" />
      </div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
