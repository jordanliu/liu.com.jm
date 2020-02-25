import React from "react"
import { ArrowUpRight } from "react-feather"

const Card = props => {
  return (
    <div className="card" key={props.project.node.frontmatter.id}>
      <div className="image">
        <a
          href={props.project.node.frontmatter.live_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Project card preview"
            src={props.project.node.frontmatter.image}
          ></img>
        </a>
      </div>

      <div className="info">
        <h3 className="title">
          <a
            href={props.project.node.frontmatter.live_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.project.node.frontmatter.title}
          </a>
        </h3>
        <span className="tags">{props.project.node.frontmatter.tags}</span>
        <p className="text">{props.project.node.frontmatter.description}</p>
        <div className="links">
          <div className="github nav-anim">
            <a
              href={props.project.node.frontmatter.github_url}
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
              href={props.project.node.frontmatter.live_url}
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
}

export default Card
