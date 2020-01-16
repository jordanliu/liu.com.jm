import React from "react"
import { Twitter, Linkedin, GitHub } from "react-feather"

const info = () => {
  return (
    <div>
      <h1>Jordan Liu</h1>
      <h4>Full Stack Developer</h4>
      <div className="social-media">
        <Twitter />
        <Linkedin />
        <GitHub />
      </div>
    </div>
  )
}

export default info
