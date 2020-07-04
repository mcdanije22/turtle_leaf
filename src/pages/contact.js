import React from "react"
import "./styles/contact.scss"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Input, Form, Button } from "antd"

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
        <Row justify="space-around">
          <Col lg={8}>
            <div id="contactInfo">
              <h1>Come see us!</h1>
              <p>Address: 123 Main St Mount Morris, Ny</p>
              <p>Phone: 555-435-7744</p>
              <p>E-mail:info@demolink.org</p>
              <p>We are open: Mon-Fri 11:00am-2pm, Sa-Su 10:00am-3pm</p>
              <div id="contactSocial">
                <h5>Follow Us</h5>
                <ul id="contactSocialList">
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div id="messageFormSection">
              <h1>Send us a message!</h1>
              <Form
                name="ContactForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Name"
                  name="Name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="message"
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}
export default Contact
