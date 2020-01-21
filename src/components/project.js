import React from "react"
import "./layout.css"

const project = () => {
  return (
    <div className="projects-wrapper">
      <h4>Projects</h4>
      <div class="cards">
        <div class="card">ONE</div>
        <div class="card">TWO</div>
        <div class="card">THREE</div>
        <div class="card">FOUR</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="projects-button">View more projects</button>
      </div>
    </div>
  )
}

export default project
