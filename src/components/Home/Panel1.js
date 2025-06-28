import React from 'react'
import '../../App.css'

const Panel1 = ({ scrollToPanel }) => {
  return (
      <article className="panel panel-1">
          <div className="panel-1-content">
              <div className="panel-1-left">
                  <div className="custom-image-1"></div>
              </div>
              <div className="panel-1-right">
                  <h2 className="panel-1-title">Welcome</h2>
                  <p className="panel-1-description">
                      This is the first panel with its own unique design.
                      You can customize everything here independently.
                  </p>
                  <div className="panel-1-navigation">
                      <button
                          onClick={() => scrollToPanel(1)}
                          className="panel-1-next-btn"
                      >
                          Get Started →
                      </button>
                  </div>
              </div>
          </div>
      </article>
  )
}

export default Panel1
