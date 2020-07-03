import React from "react"
import "./Footer.scss"
import { Input, Button, Row, Col } from "antd"
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons"

const Footer = () => {
  return (
    <div id="footerContainer">
      <div id="subSection">
        <h1>Newsletter</h1>
        <Row justify="center" gutter={[0, 48]}>
          <Col>
            <Input placeholder="Enter Email" />
          </Col>
          <Col>
            <Button>Subscribe</Button>
          </Col>
        </Row>
      </div>
      <hr />
      <ul id="footerNav">
        <Row justify="center" gutter={[0, 12]}>
          {/* <Col xs={24}>
            <li>
              <Button type="link" style={{ fontSize: "1.2rem" }}>
                About
              </Button>
            </li>
          </Col>
          <Col xs={24}>
            <li>
              <Button type="link" style={{ fontSize: "1.2rem" }}>
                Menu
              </Button>
            </li>
          </Col>
          <Col xs={24}>
            <li>
              <Button type="link" style={{ fontSize: "1.2rem" }}>
                News
              </Button>
            </li>
          </Col>
          <Col xs={24}>
            <li>
              <Button type="link" style={{ fontSize: "1.2rem" }}>
                Contact
              </Button>
            </li>
          </Col> */}
        </Row>
        <ul id="footerSocial">
          <li>
            <FacebookOutlined />
          </li>
          <li>
            <TwitterOutlined />
          </li>
          <li>
            <InstagramOutlined />
          </li>
        </ul>
      </ul>
      <div id="shopInfo">
        <p>123 Main St Mount Morris, Ny</p>
        <p>555-435-7744</p>
        <p className="copyRight">
          {" "}
          © {new Date().getFullYear()} Turtle Leaf Cafe
        </p>
      </div>
    </div>
  )
}
export default Footer
