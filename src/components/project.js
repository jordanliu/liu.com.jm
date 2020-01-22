import React from "react"
import "./layout.css"
import { RichText } from "prismic-reactjs"
//import { graphql } from "gatsby"
//    {console.log(JSON.stringify(projects, null, 4))}
const project = ({ projects }) => {
  if (!projects) return null
  return (
    <div className="cards">
      {projects.map(project => {
        return (
          <div className="card" key={project.node._meta.uid}>
            {RichText.asText(project.node.project_title)}
            {RichText.asText(project.node.project_description)}
          </div>
        )
      })}
    </div>
  )
}

export default project
