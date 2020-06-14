import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            id
            featured
            title
            tags
            description
            image {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            github_url
            live_url
          }
        }
      }
    }
  }
`
export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO />
      <Project projects={projects} />
      <About />
      <Contact />
    </Layout>
  )
}
