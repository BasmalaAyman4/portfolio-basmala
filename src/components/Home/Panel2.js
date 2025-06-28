import React from 'react'
import '../../App.css'

const Panel2 = ({ scrollToPanel }) => {
  return (
      <article className="panel panel-2">
          <div className="panel-2-content">
              <div className="panel-2-hero">
                  <h2 className="panel-2-title">Features</h2>
                  <div className="panel-2-grid">
                      <div className="feature-card">
                          <div className="feature-icon">🚀</div>
                          <h3>Fast</h3>
                          <p>Lightning fast performance</p>
                      </div>
                      <div className="feature-card">
                          <div className="feature-icon">💎</div>
                          <h3>Premium</h3>
                          <p>High quality design</p>
                      </div>
                      <div className="feature-card">
                          <div className="feature-icon">🔒</div>
                          <h3>Secure</h3>
                          <p>Bank-level security</p>
                      </div>
                  </div>
                  <div className="panel-2-navigation">
                      <button onClick={() => scrollToPanel(0)} className="nav-btn-2 prev">← Back</button>
                      <button onClick={() => scrollToPanel(2)} className="nav-btn-2 next">Next →</button>
                  </div>
              </div>
          </div>
      </article>
  )
}

export default Panel2
