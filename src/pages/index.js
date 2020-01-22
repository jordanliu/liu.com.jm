import React from "react"

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
            project_title
            project_description
            project_preview_thumbnail
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`
export default ({ data }) => {
  const doc = data.prismic.allMyproject.edges.slice(0, 1).pop()
  const projects = data.prismic.allMyProject.edges
  if (!doc || !projects) return null
  return (
    <Layout>
      <SEO title="Home" />
      <Info />
      <Project projects={projects} />
      <About />
    </Layout>
  )
}
