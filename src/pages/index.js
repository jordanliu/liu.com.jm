import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/info"
import Project from "../components/project"
import About from "../components/about"
import { graphql } from "gatsby"

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            _meta {
              uid
            }
            project_title
            project_description
            project_preview_thumbnail
          }
        }
      }
    }
  }
`
export default ({ data }) => {
  const doc = data.prismic.allProjects.edges.slice(0, 1).pop()
  const projects = data.prismic.allProjects.edges
  if (!doc || !projects) return null
  return (
    <Layout>
      <SEO title="Home" />
      <Info />
      <Project home={doc.node} projects={projects} />
      <About />
    </Layout>
  )
}

Project.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
}
