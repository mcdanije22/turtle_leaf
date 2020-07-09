import React from "react"
import "./styles/gallery.scss"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "antd"
import Img from "gatsby-image"

const Gallery = () => {
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
      allImageSharp {
        edges {
          node {
            fluid(quality: 90, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <div id="galleryContainer">
        <div
          className="headerPhoto"
          style={{
            backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${data.landing_photo.childImageSharp.fluid.src})`,
          }}
        >
          <h1>Gallery</h1>
        </div>
        <div id="galleryPhotos">
          <Row justify="center" gutter={[24, 20]}>
            {data.allImageSharp.edges.map((image, i) => {
              return (
                <Col xs={24} sm={8} key={i}>
                  <Img fluid={image.node.fluid} />
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </Layout>
  )
}
export default Gallery
