import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import About from "../components/about"
import Contact from "../components/contact"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            id
            featured
            title
            tags
            description
            image
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
