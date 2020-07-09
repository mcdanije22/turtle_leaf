import React, { useState } from "react"
import "./styles/gallery.scss"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "antd"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const Gallery = () => {
  const [photoIndex, setIndex] = useState(0)
  const [isOpen, setOpenStatus] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      landing_photo: file(relativePath: { eq: "landing_photo2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allImageSharp {
        edges {
          node {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
  console.log(data.allImageSharp.edges.length)
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
          <Row gutter={[24, 20]}>
            {data.allImageSharp.edges.map((image, i) => {
              return (
                <Col
                  xs={24}
                  sm={8}
                  key={i}
                  onClick={() => {
                    setIndex(i)
                    setOpenStatus(true)
                  }}
                >
                  <Img fluid={image.node.fluid} />
                </Col>
              )
            })}
          </Row>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={data.allImageSharp.edges[photoIndex].node.fluid.src}
            nextSrc={
              data.allImageSharp.edges[
                photoIndex + 1 > data.allImageSharp.edges.length - 1
                  ? 0
                  : photoIndex + 1
              ].node.fluid.src
            }
            prevSrc={
              data.allImageSharp.edges[
                photoIndex === 0
                  ? data.allImageSharp.edges.length - 1
                  : photoIndex - 1
              ].node.fluid.src
            }
            onCloseRequest={() => setOpenStatus(false)}
            onMovePrevRequest={() =>
              setIndex(
                photoIndex === 0
                  ? data.allImageSharp.edges.length - 1
                  : photoIndex - 1
              )
            }
            onMoveNextRequest={() =>
              setIndex(
                photoIndex + 1 > data.allImageSharp.edges.length - 1
                  ? 0
                  : photoIndex + 1
              )
            }
          />
        )}
      </div>
    </Layout>
  )
}
export default Gallery
