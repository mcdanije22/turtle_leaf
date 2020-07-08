import React from "react"
import "./DesktopNav.scss"
import { Link } from "gatsby"

const DesktopNav = () => {
  return (
    <div id="desktopNavContainer">
      <ul id="desktopNav">
        <li>
          <Link to="/about" activeClassName="activeNav">
            About
          </Link>
        </li>
        <li>
          <Link to="/" activeClassName="activeNav">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/news" activeClassName="activeNav">
            News
          </Link>
        </li>
        <li>
          <Link to="/gallery" activeClassName="activeNav">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="activeNav">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default DesktopNav
