import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button, Row, Col, Carousel, BackTop, Card } from "antd"
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons"
import "./styles/index.scss"
import MobileNav from "../components/navBar/MobileNav"
import Footer from "../components/Footer/Footer"
import Img from "gatsby-image"
import { Link } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      landing_photo: file(relativePath: { eq: "landing_photo2.jpg" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 1920) {
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
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      customers: file(relativePath: { eq: "customers.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
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
          fluid(quality: 90, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutStoreFront: file(relativePath: { eq: "about_store_front.jpg" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test: file(relativePath: { eq: "test.jpg" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smoothie: file(relativePath: { eq: "smoothie.jpg" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wrap: file(relativePath: { eq: "wrap.jpg" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              date
              slug
              title
              featuredImage {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)
  function onChange(a, b, c) {
    console.log(a, b, c)
  }
  console.log(data)
  return (
    <div id="langingPage">
      <BackTop />
      <div
        id="landingContent"
        style={{
          backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${data.landing_photo.childImageSharp.fluid.src})`,
        }}
      >
        <Row justify="center" align="top" style={{ height: "100%" }}>
          <Col span={24}>
            <MobileNav color="white" />
            <div id="landingPageNav">
              <ul id="nav">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a
                    href="https://us.orderspoon.com/turtleleafcafe"
                    target="_blank"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
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
                  <Link to="/">
                    <Button shape="circle" ghost size="large">
                      <FacebookOutlined />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Button shape="circle" ghost size="large">
                      <TwitterOutlined />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Button shape="circle" ghost size="large">
                      <InstagramOutlined />
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div id="mainContent">
        <div id="IntroSection">
          <Row justify="center" gutter={[24, 0]}>
            <Col xs={24} lg={8}>
              <Img fluid={data.aboutStoreFront.childImageSharp.fluid} />
            </Col>
            <Col lg={1}></Col>
            <Col>
              <div id="introText">
                <h1>Welcome back to Turtle Leaf Cafe</h1>
                <hr />
                <p>
                  We believe that food should not only taste good, but be good
                  for you. Providing healthy choices to maintain optimal health
                  for our customers is our priorty. Stop in today!
                </p>
              </div>
              <Link to="/about">
                <Button shape="round" ghost size="large" type="primary">
                  Learn More
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
        <div
          className="photoDivider"
          style={{
            backgroundImage: `url(${data.test.childImageSharp.fluid.src})`,
          }}
        ></div>
        <div id="heroPhotoSection">
          <h1>Local Food in the Heart of Elmira</h1>
          <Row justify="center" align="middle" gutter={[24, 0]}>
            <Col>
              <Link to="/about">
                <div className="optionSection">
                  <Img fluid={data.tl_sign.childImageSharp.fluid} />
                  <h2>Our Story</h2>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/menu">
                <div className="optionSection">
                  <Img fluid={data.smoothie.childImageSharp.fluid} />
                  <h2>Our Food</h2>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/contact">
                <div className="optionSection">
                  <Img fluid={data.customers.childImageSharp.fluid} />
                  <h2>Vist Us</h2>
                </div>
              </Link>
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
                <div id="foodMenuContent">
                  <Row justify="space-around" align="top">
                    <Col xs={24} lg={8}>
                      <div id="menuLeftSide">
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Beef and Mushroom Panini</h2>
                            <h2>$9.49</h2>
                          </div>
                          <p>Beef, Provolone, Spinach, and Mushrooms</p>
                          <hr />
                        </div>
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Turtle Burger</h2>
                            <h2>$10.42</h2>
                          </div>
                          <p>Zucchini, Onion, Tomato, Spinach, Hummus</p>
                          <hr />
                        </div>
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Spicy Chicken Flatbread</h2>
                            <h2>$10.42</h2>
                          </div>
                          <p>
                            Ricotta, Grilled Chicken, Hot Sauce, Blue Cheese,
                            Mozzarella
                          </p>
                          <hr />
                        </div>
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Pizza Burger</h2>
                            <h2>$10.42</h2>
                          </div>
                          <p>Pizza Sauce, Red Peppers, Lettuce, Mozzarella</p>
                          <hr />
                        </div>
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Spicy Chicken Flatbread</h2>
                            <h2>$10.42</h2>
                          </div>
                          <p>
                            Ricotta, Grilled Chicken, Hot Sauce, Blue Cheese,
                            Mozzarella
                          </p>
                          <hr />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} lg={8}>
                      <div id="menuRightSide">
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Chicken Salad Pita</h2>
                            <h2>$9.03</h2>
                          </div>
                          <p>
                            White Meat Chicken, Mayo, Apple, Grapes & Craisins
                          </p>
                          <hr />
                        </div>
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Vanilla Chai Smoothie</h2>
                            <h2>$6.02</h2>
                          </div>
                          <p>
                            Chai Spice, Vanilla Syrup, Milk, Banana, Brown Sugar
                          </p>
                          <hr />
                        </div>
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Chocolate Peanut Butter</h2>
                            <h2>$6.02</h2>
                          </div>
                          <p>
                            Chocolate Protein Powder, Peanut Butter, Milk,
                            Yogurt
                          </p>
                          <hr />
                        </div>
                        <div className="menuItem">
                          <div className="topPortion">
                            <h2>Pineapple Mango Spinach</h2>
                            <h2>$6.02</h2>
                          </div>
                          <p>Pineapple, Mango, Spinach, Apple Juice</p>
                          <hr />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} lg={20}>
                      <a
                        href="https://us.orderspoon.com/turtleleafcafe"
                        target="_blank"
                      >
                        <Button size="large" ghost>
                          View Full Menu
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div id="newsSection">
          <h1>Turtle Leaf Cafe News</h1>
          <Row justify="center">
            <Col>
              <div className="newsStory">
                <Card
                  cover={
                    <Img
                      fluid={
                        data.allMarkdownRemark.edges[0].node.frontmatter
                          .featuredImage.childImageSharp.fluid
                      }
                    />
                  }
                >
                  <div className="newsRightSide">
                    <p>
                      {data.allMarkdownRemark.edges[0].node.frontmatter.date}
                    </p>
                    <h3>
                      {data.allMarkdownRemark.edges[0].node.frontmatter.title}
                    </h3>
                    <p>{data.allMarkdownRemark.edges[0].node.excerpt}</p>
                    <Link
                      to={data.allMarkdownRemark.edges[0].node.frontmatter.slug}
                    >
                      <Button type="link" style={{ padding: "0" }}>
                        Read More...
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </Col>
            <Col>
              <div className="newsStory">
                <Card
                  cover={
                    <Img
                      fluid={
                        data.allMarkdownRemark.edges[1].node.frontmatter
                          .featuredImage.childImageSharp.fluid
                      }
                    />
                  }
                >
                  <div className="newsRightSide">
                    <p>
                      {data.allMarkdownRemark.edges[1].node.frontmatter.date}
                    </p>
                    <h3>
                      {data.allMarkdownRemark.edges[1].node.frontmatter.title}
                    </h3>
                    <p>{data.allMarkdownRemark.edges[1].node.excerpt}</p>
                    <Link
                      to={data.allMarkdownRemark.edges[1].node.frontmatter.slug}
                    >
                      <Button type="link" style={{ padding: "0" }}>
                        Read More...
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </Col>
            <Col>
              <div className="newsStory">
                <Card
                  cover={
                    <Img
                      fluid={
                        data.allMarkdownRemark.edges[2].node.frontmatter
                          .featuredImage.childImageSharp.fluid
                      }
                    />
                  }
                >
                  <div className="newsRightSide">
                    <p>
                      {data.allMarkdownRemark.edges[2].node.frontmatter.date}
                    </p>
                    <h3>
                      {data.allMarkdownRemark.edges[2].node.frontmatter.title}
                    </h3>
                    <p>{data.allMarkdownRemark.edges[2].node.excerpt}</p>
                    <Link
                      to={data.allMarkdownRemark.edges[2].node.frontmatter.slug}
                    >
                      <Button type="link" style={{ padding: "0" }}>
                        Read More...
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          <div id="newsButtonContainer">
            <Link to="/news">
              <Button type="primary" size="large" style={{ margin: "2rem 0" }}>
                View all news updates
              </Button>
            </Link>
          </div>
        </div>
        <div id="reviewSection">
          <h1>People Love Us!</h1>
          <Carousel autoplay>
            <div className="review">
              <p>
                "Great spot for Food! I love the Elvis Burger! so many other
                great flatbreads, very creative and unique. Adam runs an
                excellent establishment!"
              </p>
              <h3>
                <b> Craig Colwell</b>
              </h3>
            </div>
            <div className="review">
              <p>
                "The Big Ham Sandwich and Ham Cheddar Pear Panini are our
                absolute favorites. Delicious flavors. Husband also loves the
                Bistro Roast Beef. Can't wait to try Strawberry Turkey Brie
                Panini"
              </p>
              <h3>
                <b> Kathy Ring Tutak</b>
              </h3>
            </div>
            <div className="review">
              <p>
                "This is the most caring people I have ever met they actually
                care about their customers you not just another sale here! I’d
                recommend this place to anyone!!"
              </p>
              <h3>
                <b> Sharon Sherman-Appleton</b>
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default IndexPage
