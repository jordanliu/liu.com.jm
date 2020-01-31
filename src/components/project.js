import React from "react"
import "./card.css"
import { RichText } from "prismic-reactjs"

const project = ({ projects }) => {
  if (!projects) return null
  return (
    <div>
      <h4 className="projects-title">Featured Projects</h4>
      <div className="cards">
        {projects.map(project => {
          return (
            <div className="card" key={project.node._meta.uid}>
              <div className="info">
                <h3> {RichText.asText(project.node.project_title)}</h3>
                <p>{RichText.asText(project.node.project_description)}</p>
              </div>
              <div className="image"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default project
