import React from "react"
import "./layout.css"

const project = () => {
  return (
    <div className="projects-wrapper">
      <h4>Projects</h4>
      <div>
        <div class="work-container">
          <div class="work">
            <div class="card"></div>
          </div>
          <div class="work">
            <div class="card"></div>
          </div>
        </div>
        <div class="work-container">
          <div class="work">
            <div class="card"></div>
          </div>
          <div class="work">
            <div class="card"></div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="projects-button">View more projects</button>
      </div>
    </div>
  )
}

export default project
