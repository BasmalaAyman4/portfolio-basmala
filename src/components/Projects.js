import React from 'react'
import gg from '../assets/beneshty.png'
import pm from '../assets/pm.png'
import shein from '../assets/shein.png'
import etruk from '../assets/etruk.png'
import styles from '../styles/projects.module.css'
import projright from '../assets/proj1.png'
import projleft from '../assets/proj2.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "BeNeshty",
            description: "A modern, responsive online store for cotton clothing, built with Next.js.The platform includes product browsing, search and filtering, multilingual support, and a secure checkout process",
            image: gg,
            category: "E-commerce",
            url:"https://beneshty.com/"
        },
        {
            id: 2,
            title: "Mehrail PM",
            description: "An Egyptian clothing brand offering modern, minimal everyday wear for women.Focused on comfort, high- quality fabrics, and trendy designs, with active social media presence for sales and customer engagement.",
            image: pm,
            category: "E-commerce",
            url:"https://mehrailpm.com/"
        },
        {
            id: 3,
            title: "Shein Stuff",
            description: "A trendy fashion destination offering a wide range of imported Shein apparel for women. From casual wear to chic dresses, Shein Stuff brings the latest fashion trends at affordable prices.",
            image: shein,
            category: "E-commerce",
            url:"https://sheinstuff.com/"
        },
        {
            id: 4,
            title: "Etruk Athar",
            description: "A platform dedicated to making a positive impact by connecting individuals with charitable causes, poverty alleviation initiatives, and volunteering opportunities. We aim to empower communities through...",
            image: etruk,
            category: "Charities",
            url:"https://drive.google.com/file/d/15Galft6_yVIlKigYJl3d41i2g8G_jbYs/view?usp=drive_link"
        },
       
    ];
  return (
    <>
          <section className={`${styles.project__sec}`} id="projects">
              <h2 className={styles.projects__title}>My Recent Works</h2>
              <div className={styles.cards}>
                  {
                      projects.map(project => (
                          <div className={styles.card}>
                              <div className={styles.card__hero}>
                                  <img alt='' src={project.image} className={styles.gg} />
                              </div>

                              <div className={styles.card__footer}>
<p className={styles.card__category}>{project.category}</p>
                           <h3>{project.title}</h3>       
                                  <p className={styles.card__para}>{project.description}</p>
                             
                                  <button onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')} className="button" >
                                      <span className="button__icon-wrapper">
                                          <svg
                                              viewBox="0 0 14 15"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="button__icon-svg"
                                              width="10"
                                          >
                                              <path
                                                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                  fill="currentColor"
                                              ></path>
                                          </svg>

                                          <svg
                                              viewBox="0 0 14 15"
                                              fill="none"
                                              width="10"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="button__icon-svg button__icon-svg--copy"
                                          >
                                              <path
                                                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                  fill="currentColor"
                                              ></path>
                                          </svg>
                                      </span>
                                     Visit Website
                                  </button>

                              </div>
                          </div>
                      ))
                  }
              </div>
             

             

          </section>
    </>
  )
}

export default Projects
