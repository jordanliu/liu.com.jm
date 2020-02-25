import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project/project"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import { graphql } from "gatsby"
import fadeInUp from "react-animations/lib/fade-in-up"
import Radium, { StyleRoot } from "radium"

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

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
}

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <StyleRoot style={styles.fadeInUp}>
      <Layout>
        <SEO />
        <Project projects={projects} />
        <About />
        <Contact />
      </Layout>
    </StyleRoot>
  )
}
