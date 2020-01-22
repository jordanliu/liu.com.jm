import React from "react"
import "./layout.css"
import { graphql } from "gatsby"

const project = ({ projects }) => {
  return (
    <div className="cards">
      {projects.map((project, i) => (
        <div className="card" key={i}>
          text should be here:
          {project.node.project_title.text}
        </div>
      ))}
      {console.log(JSON.stringify(projects, null, 4))}
    </div>
  )
}
export default project

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
