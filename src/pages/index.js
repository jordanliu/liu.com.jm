import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Project from "../components/project/Project"
import About from "../components/about/About"
import Contact from "../components/contact/Contact"
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
