import React from "react"
import "./Footer.scss"
import { Input, Button, Row, Col } from "antd"
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons"
import { Link } from "gatsby"

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
        <Row justify="center" gutter={[0, 12]}></Row>
        <ul id="footerSocial">
          <li>
            <a href="https://www.facebook.com/TurtleLeafCafe/" target="_blank">
              <FacebookOutlined />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/TurtleLeafCafe/" target="_blank">
              {" "}
              <TwitterOutlined />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/TurtleLeafCafe/" target="_blank">
              {" "}
              <InstagramOutlined />
            </a>
          </li>
        </ul>
      </ul>
      <div id="shopInfo">
        <p>315 E Water St, Elmira, NY 14901</p>
        <p>
          <a href="tel:607-767-6191">(607) 767-6191</a>
        </p>
        <p className="copyRight">
          © {new Date().getFullYear()} Turtle Leaf Cafe
        </p>
      </div>
    </div>
  )
}
export default Footer
