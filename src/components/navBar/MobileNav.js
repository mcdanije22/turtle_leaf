import React, { useState } from "react"
import "./MobileNav.scss"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"

const MobileNav = () => {
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
          style={{ fontSize: "1.5rem", color: "white" }}
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
            <li>home</li>
            <li>About</li>
            <li>Announcements</li>
            <li>Gallery</li>
            <li>Contact</li>
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
