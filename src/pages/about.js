import React from "react"
import "./styles/about.scss"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "antd"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      landing_photo: file(relativePath: { eq: "landing_photo2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adamHeadShot: file(relativePath: { eq: "adam_headshot.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div id="aboutContainer">
        <div
          className="headerPhoto"
          style={{
            backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${data.landing_photo.childImageSharp.fluid.src})`,
          }}
        >
          <h1>Our Story</h1>
        </div>
        <div id="aboutMainContent">
          <Row justify="center" gutter={[24, 0]} align="top">
            <Col xs={24} lg={8}>
              <Img fluid={data.adamHeadShot.childImageSharp.fluid} />
            </Col>
            <Col xs={24} lg={8}>
              <div id="aboutText">
                <h1> Meet the Business Owner </h1>
                <p>Adam Bunce</p>
                <h2>The Beginning: 2015-2019 </h2>
                <p>
                  Adam has spent over 15 years in the restaurant industry. His
                  first job was at a Mcdonalds in his hometown while in High
                  School. He gained insight into Front of House experience while
                  working there as well as Friendly's, and a locally owned
                  restaurant, Little Italy. It wasn't until later in life when
                  he worked at chain restaurants like Ruby Tuesday and Buffalo
                  Wild Wings that he decided to look into owning something of
                  his own. When he was approached by the original owner of
                  Turtle Leaf Cafe to be the manager of her restaurant he was
                  very quick to accept the role. After working as the manager of
                  Turtle Leaf Cafe for 18 months he was then offered the
                  opportunity to take on ownership of the cafe. When deciding to
                  keep the restaurant in the current location or move to Elmira
                  it was Adam's choice to bring their unique menu to the heart
                  of his hometown in hopes that the downtown area will
                  eventually turn around.{" "}
                </p>
                <h2>Fast Forward To Today: </h2>
                <p>
                  Since Turtle Leaf Cafe has moved to Elmira a lot has changed.
                  The City has a new Comprehensive Masterplan in place and a
                  Downtown Revitalization Initiative was awarded by the state of
                  NY, which helped spark revitalization. Brand new construction
                  as well as rehabilitation to historic buildings can be seen
                  throughout the downtown. Not only are new businesses sprouting
                  in Downtown Elmira, but we also have people on waiting lists
                  to live in the downtown corridor. We are very encouraged by
                  the growth and leadership that we have seen over our time in
                  Elmira. We are very optimistic that the best is still yet to
                  come, not just for TLC but for our city in general.
                </p>
                <p>
                  <h1> #weareelmira</h1>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}
export default About
