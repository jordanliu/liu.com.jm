import React from "react"
import "./layout.css"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
//    {console.log(JSON.stringify(projects, null, 4))}
const project = ({ projects }) => {
  if (!projects) return null
  return (
    <div class="cards">
      {projects.map(project => {
        return (
          <div class="card" key={project.node._meta.uid}>
            {RichText.asText(project.node.project_title)}
          </div>
        )
      })}
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
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`
