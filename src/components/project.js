import React from "react"
import "./card.css"
import { ArrowUpRight } from "react-feather"

const project = ({ projects }) => {
  if (!projects) return null
  return (
    <div>
      <h4 className="projects-title">Featured Projects</h4>
      <div className="cards">
        {projects.map(project => {
          return (
            <div className="card" key={project.node.frontmatter.id}>
              <div className="image">
                <img
                  alt="placeholder"
                  src={project.node.frontmatter.image}
                ></img>
              </div>

              <div className="info">
                <h3 className="title">{project.node.frontmatter.title}</h3>
                <h4 className="tags">{project.node.frontmatter.tags}</h4>
                <p className="text">{project.node.frontmatter.description}</p>
                <div className="links">
                  <div className="github nav-anim">
                    <a
                      href={project.node.frontmatter.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Github"
                    >
                      Github
                      <ArrowUpRight className="error" />
                    </a>
                  </div>
                  <div className="view-live nav-anim">
                    <a
                      href={project.node.frontmatter.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Live"
                    >
                      View Live
                      <ArrowUpRight className="error" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default project
