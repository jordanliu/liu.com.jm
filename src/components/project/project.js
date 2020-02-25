import React from "react"
import "./project.css"
import Card from "../card/card"

const Project = ({ projects }) => {
  if (!projects) return null
  return (
    <section className="project-wrapper">
      <h4 className="projects-title">Featured Projects</h4>
      <div className="cards">
        {projects.map(project => {
          return <Card project={project} key={project.node.frontmatter.id} />
        })}
      </div>
    </section>
  )
}

export default Project
