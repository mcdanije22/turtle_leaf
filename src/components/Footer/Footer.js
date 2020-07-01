import React from "react"
import "./Footer.scss"
import { Input, Button, Row, Col } from "antd"

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
    </div>
  )
}
export default Footer
