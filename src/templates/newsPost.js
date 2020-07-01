import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./newPost.scss"
import { Col, Row } from "antd"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)

  return (
    <Layout>
      <SEO title="News" />
      <div className="newsPostContainer">
        <div
          className="headerPhoto"
          style={{
            backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${data.landing_photo.childImageSharp.fluid.src})`,
          }}
        >
          <h1>What's New</h1>
        </div>
        <Row justify="center">
          <Col xs={24} lg={10}>
            <div className="postTitleInfo">
              <h1>{frontmatter.title}</h1>
              {/* <p>{frontmatter.subtitle}</p> */}
              <p>{frontmatter.date}</p>
            </div>
            <div className="postImage">
              <Img
                fluid={
                  data.markdownRemark.frontmatter.featuredImage.childImageSharp
                    .fluid
                }
              />
            </div>

            <div
              className="newsPostContent"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    landing_photo: file(relativePath: { eq: "landing_photo2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
        subtitle
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
