import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MenuOutlined } from "@ant-design/icons"

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
        <MenuOutlined style={{ alignSelf: "center", fontSize: "1rem" }} />
        <h3>Turtle Leaf Cafe</h3>
        <h5></h5>
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
