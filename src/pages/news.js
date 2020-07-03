import React from "react"
import "./styles/news.scss"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Button, Row, Col, Card } from "antd"
import Img from "gatsby-image"
import { Link } from "gatsby"

const News = () => {
  const { Meta } = Card
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
  return (
    <Layout>
      <div id="newsContainer">
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
          {data.allMarkdownRemark.edges.map((post, i) => {
            return (
              <Col key={i}>
                <div className="newsStory">
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <Img
                        fluid={
                          post.node.frontmatter.featuredImage.childImageSharp
                            .fluid
                        }
                      />
                    }
                    actions={[]}
                  >
                    <div className="newsRightSide">
                      <p>{post.node.frontmatter.date}</p>
                      <h3>{post.node.frontmatter.title}</h3>
                      <p>{post.node.excerpt}</p>
                      <Link to={post.node.frontmatter.slug}>
                        <Button type="link" style={{ padding: "0" }}>
                          Read More...
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </Layout>
  )
}
export default News
