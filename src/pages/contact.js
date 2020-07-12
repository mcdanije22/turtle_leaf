import React from "react"
import "./styles/contact.scss"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Input, Form, Button } from "antd"
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons"
import { Link } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      landing_photo: file(relativePath: { eq: "landing_photo2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test: file(relativePath: { eq: "test.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const onFinish = values => {
    console.log("Success:", values)
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }
  return (
    <Layout>
      <div id="contactContainer">
        <div
          className="headerPhoto"
          style={{
            backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${data.landing_photo.childImageSharp.fluid.src})`,
          }}
        >
          <h1>CONTACT US</h1>
        </div>
        <div id="contactMainInfo">
          <Row justify="center" gutter={[0, 24]}>
            <Col xs={24} lg={8}>
              <div id="contactInfo">
                <h1>Come see us!</h1>
                <p>315 E Water St, Elmira, NY 14901</p>
                <a href="tel:607-767-6191">(607) 767-6191</a>
                <p>
                  <a href="mailto: adam@turtleleafcafe.com">
                    adam@turtleleafcafe.com
                  </a>
                </p>
                <p>We are open: Mon-Fri 11:00am-2pm, Sa-Su 10:00am-3pm</p>
                <div id="contactSocial">
                  <h3>
                    <b>Follow Us</b>
                  </h3>
                  <ul id="contactSocialList">
                    <li>
                      <a
                        href="https://www.facebook.com/TurtleLeafCafe/"
                        target="_blank"
                      >
                        <FacebookOutlined />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/TurtleLeafCafe/"
                        target="_blank"
                      >
                        <TwitterOutlined />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/TurtleLeafCafe/"
                        target="_blank"
                      >
                        <InstagramOutlined />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div id="messageFormSection">
                <h1>Send us a message!</h1>
                <Form
                  name="ContactForm"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="Name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please input your message!" },
                    ]}
                  >
                    <Input.TextArea placeholder="Message" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col xs={24}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.8876861919193!2d-76.80427078455229!3d42.088455879205995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d0410c0d04e353%3A0xc34c5d106c1bf202!2sTurtle%20Leaf%20Cafe!5e0!3m2!1sen!2sus!4v1593919552339!5m2!1sen!2sus"
                id="googleMaps"
              ></iframe>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
