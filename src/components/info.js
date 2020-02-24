import React from "react"
import { socialLinks } from "../data"
import { Twitter, Linkedin, GitHub } from "react-feather"

const info = () => {
  return (
    <div className="header-info">
      <a href="https://jordanxliu.com">
        <h1>Jordan Liu</h1>
      </a>
      <h4>Full Stack Developer</h4>
      <div className="social-media">
        {
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
        }
        {
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        }
        {
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <GitHub />
          </a>
        }
      </div>
    </div>
  )
}

export default info
