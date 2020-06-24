import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button, Row, Col, Carousel } from "antd"
import {
  MenuOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles/index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      landing_photo: file(relativePath: { eq: "landing_photo2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      family: file(relativePath: { eq: "family.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tl_sign: file(relativePath: { eq: "tl_sign.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      salad: file(relativePath: { eq: "salad.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      storeFront: file(relativePath: { eq: "store_front.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adamHeadShot: file(relativePath: { eq: "adam_headshot.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test: file(relativePath: { eq: "test.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smoothie: file(relativePath: { eq: "smoothie.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wrap: file(relativePath: { eq: "wrap.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  function onChange(a, b, c) {
    console.log(a, b, c)
  }
  return (
    <div id="langingPage">
      <div
        id="landingContent"
        style={{
          backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${data.landing_photo.childImageSharp.fluid.src})`,
        }}
      >
        <Button type="link" style={{ padding: "0" }}>
          <MenuOutlined style={{ fontSize: "2rem", color: "white" }} />
        </Button>
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Col span={8}></Col>
          <Col span={24}>
            <div id="landingText">
              <h3>Welcome to</h3>
              <h1>Turtle Leaf Cafe</h1>
              <h3>•COFFEE THAT PEOPLE LOVE•</h3>
            </div>
          </Col>
          <Col>
            <div id="bottomLanding">
              <Button ghost shape="round" size="large">
                Order Online
              </Button>
              <ul id="bottomSocial">
                <li>
                  <Button shape="circle" ghost size="large">
                    <FacebookOutlined />
                  </Button>
                </li>
                <li>
                  <Button shape="circle" ghost size="large">
                    <TwitterOutlined />
                  </Button>
                </li>
                <li>
                  <Button shape="circle" ghost size="large">
                    <InstagramOutlined />
                  </Button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div id="mainContent">
        <div id="IntroSection">
          <Row justify="center">
            <Col xs={24} lg={6}>
              {/* <Img fluid={data.adamHeadShot.childImageSharp.fluid} /> */}
              <img src={`${data.adamHeadShot.childImageSharp.fluid.src}`} />
            </Col>
            <Col xs={24} lg={6}>
              <div id="introText">
                <h2>Welcome back to Turtle Leaf Cafe</h2>
                <p>
                  We believe that food should not only taste good, but be good
                  for you. Providing healthy choices to maintain optimal health
                  for our customers is our priorty. Stop in today!
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className="photoDivider"
          style={{
            backgroundImage: `  url(${data.family.childImageSharp.fluid.src})`,
          }}
        ></div>
        <div id="heroPhotoSection">
          {/* <img
            src={`${data.test.childImageSharp.fluid.src}`}
            style={{ height: "300px", width: "380px" }}
          /> */}
          <h1>Local Food in the Heart of Elmira</h1>
          <Row justify="center" align="middle">
            <Col xs={24} lg={6}>
              <div className="optionSection">
                <img
                  src={`${data.test.childImageSharp.fluid.src}`}
                  className="photoOption"
                  // style={{ height: "400px", height: "500px" }}
                />
                {/* <Img
                  fluid={data.tl_sign.childImageSharp.fluid}
                  className="photoOption"
                  // style={{ height: "400px", height: "500px" }}
                /> */}
                <p>Our Story</p>
              </div>
            </Col>
            <Col xs={24} lg={6}>
              <div className="optionSection">
                {/* <Img
                  fluid={data.test.childImageSharp.fluid}
                  className="photoOption"
                /> */}
                <img
                  src={`${data.smoothie.childImageSharp.fluid.src}`}
                  className="photoOption"
                  // style={{ height: "400px", height: "500px" }}
                />
                <p>Our Food</p>
              </div>
            </Col>
            <Col xs={24} lg={6}>
              <div className="optionSection">
                {/* <Img
                  fluid={data.test.childImageSharp.fluid}
                  className="photoOption"
                /> */}
                <img
                  src={`${data.test.childImageSharp.fluid.src}`}
                  className="photoOption"
                  // style={{ height: "400px", height: "500px" }}
                />
                <p>Vist Us</p>
              </div>
            </Col>
          </Row>
        </div>
        <div id="menuSection">
          <Row>
            <Col xs={24} lg={8}>
              <img src={`${data.wrap.childImageSharp.fluid.src}`} />
            </Col>
            <Col xs={24} lg={16}>
              <div id="menu">
                <h1>Our Menu Favorites</h1>
                <div id="menuContent">
                  <Row justify="space-around" align="top">
                    <Col lg={6}>
                      <div id="menuLeftSide">
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Sandwhich</h2>
                            <h2>$5.99</h2>
                          </div>
                          <p>test test test test</p>
                          <hr />
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div id="menuRightSide">
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Sandwhich</h2>
                            <h2>$5.99</h2>
                          </div>
                          <p>test test test test</p>
                          <hr />
                        </div>
                      </div>
                    </Col>
                    <Col span={18}>
                      <Button size="large" ghost>
                        View Full Menu
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div id="reviewSection">
          <h1>People Love Us!</h1>
          <Carousel>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkathy.tutak.3%2Fposts%2F10223232923920111&width=500"
                width="350"
                height="280"
                style={{ border: "none", overflow: "hidden", padding: "1rem" }}
              ></iframe>
            </div>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkathy.tutak.3%2Fposts%2F10223232923920111&width=500"
                width="350"
                height="280"
                style={{ border: "none", overflow: "hidden", padding: "1rem" }}
              ></iframe>
            </div>
            {/* <div>
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffrancesca.coutinhohenning%2Fposts%2F3297716760260046&width=500"
                width="350"
                height="700"
                style={{ border: "none", overflow: "hidden" }}
              ></iframe>
            </div>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffrancesca.coutinhohenning%2Fposts%2F3297716760260046&width=500"
                width="350"
                height="700"
                style={{ border: "none", overflow: "hidden" }}
              ></iframe>
            </div> */}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default IndexPage
