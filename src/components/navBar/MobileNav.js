import React, { useState } from "react"
import "./MobileNav.scss"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"
import { Link } from "gatsby"

// passing color as prop to change from white to gray on different pages
const MobileNav = ({ color }) => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  return (
    <div id="mobileNavContainer">
      <Button type="link" style={{ padding: "0" }}>
        <MenuOutlined
          style={{ fontSize: "1.5rem", color: `${color}` }}
          onClick={() => {
            showDrawer()
          }}
        />
      </Button>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="right"
      >
        <div id="menuContent">
          <ul id="sideMenu">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <CloseOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => {
              onClose()
            }}
          />
        </div>
      </Drawer>
    </div>
  )
}
export default MobileNav
