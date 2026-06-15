import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projectsData'
import styles from '../styles/projects.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const navigate = useNavigate()
  const cardRefs = useRef([])

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return
      const isLeftToRight = [0, 1, 4, 5].includes(index)
      gsap.fromTo(
        card,
        { xPercent: isLeftToRight ? -50 : 50, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section className={styles.project__sec} id="projects">
      <h2 className={styles.projects__title}>My Recent Works</h2>
      <div className={styles.cards}>
        {projects.map((project, index) => (
          <div
            className={styles.card}
            ref={el => (cardRefs.current[index] = el)}
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.card__hero}>
              <img alt={project.title} src={project.image} className={styles.gg} />
            </div>
            <div className={styles.card__footer}>
              <p className={styles.card__category}>{project.category}</p>
              <h3>{project.title}</h3>
              <p className={styles.card__para}>{project.description}</p>
              <button
                onClick={e => {
                  e.stopPropagation() // prevent card click
                  window.open(project.url, '_blank', 'noopener,noreferrer')
                }}
                className="button"
              >
                <span className="button__icon-wrapper">
                  <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                  <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                </span>
                Visit Website
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btn__body}>
        <button className={styles.button} onClick={() => window.open('https://github.com/BasmalaAyman4')}>
          View More Projects
        </button>
      </div>
    </section>
  )
}

export default Projects