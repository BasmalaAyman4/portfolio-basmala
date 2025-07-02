/* import React from 'react'
import styles from '../../styles/experience.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import exp from '../../assets/star.png'
import edu from '../../assets/mortarboard.png'

const Experience = () => {
  return (
    <>
      <section className={`${styles.experience__sec}`} id="resume">
        <Container>
          <Row>
            <Col>
              <div className={`${styles.experience__body}`}>
                <img alt='' src={exp} />
                <h2>My Experience</h2>
              </div>
              <div className={`${styles.experience__card}`}>
                <h4>2024 - Present</h4>
                <h5>Gs For Application</h5>
                <p>Maadi</p>
              </div>
              <div className={`${styles.experience__card}`}>
                <h4>Mar 2024 - Nov 2024</h4>
                <h5>LXDYI</h5>
                <p>Remotly</p>
              </div>
              <div className={`${styles.experience__card}`}>
                <h4>2023 - 2024</h4>
                <h5>Trauxit LLC</h5>
                <p>Remotly</p>
              </div>

            </Col>
            <Col>
              <div className={`${styles.experience__body}`}>
                <img alt='' src={edu} />
                <h2>My Education</h2>
              </div>
              <div className={`${styles.experience__card}`}>
                <h4>2019 - 2023</h4>
                <h5>Bachelor of Science in computer science</h5>
                <p>Helwan University</p>
              </div>
              <div className={`${styles.experience__card}`}>
                <h4>Aug 2022</h4>
                <h5>React Development Cross-Skilling</h5>
                <p>Udacity Nanodegree </p>
              </div>
              <div className={`${styles.experience__card}`}>
                <h4>Jun 2022</h4>
                <h5>Professional Front-End Web Development</h5>
                <p>Udacity Nanodegree </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Experience
 */


import React, { useEffect, useState } from 'react'
import styles from '../../styles/experience.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import exp from '../../assets/star.png'
import edu from '../../assets/mortarboard.png'
import Aos from 'aos'
const Experience = () => {
  useEffect(() => {
    Aos.init({
      duration: 800, // Set default animation duration
      easing: 'ease-in-sine', // Default easing
    });
  }, []);
  return (

    <>
      <section className={`${styles.ThirdSec}`} id="experince">
          <h2 className={`${styles.skills__title}`}>Professional Experience </h2>
          <p className={styles.sectionSubtitle}>
        My professional journey in front-end development
          </p>
          <div className={`${styles.lines__body}`}>
            <div className={`${styles.line__top}`}></div>
            <div className={`${styles.line__bottom}`}></div>
            <div className={`${styles.lines__one}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">
              <div className={`${styles.line__onee}`}></div>

            </div>
            <div className={`${styles.lines__two}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">
              <div className={`${styles.line__twoo}`}></div>
            </div>
            <div className={`${styles.lines__three}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">
              <div className={`${styles.line__three}`}></div>
            </div>
            <div className={`${styles.lines__four}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">

              <div className={`${styles.line__fourr}`}></div>
            </div>
            <div className={`${styles.lines__five}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">

              <div className={`${styles.line__fivee}`}></div>
            </div>
          </div>
          <div className={`${styles.row}`} >
            <div className={`${styles.col} ${styles.skill__one}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200" >
              <hr className={`${styles.line__left}`} />
              <div>
                <h4>2024 - Present</h4>
                <h3>Mid-Level Front-end Developer</h3>
                <h2>Gs For Application</h2>
              </div>
              <div>
                <p>Building a startup e-commerce website focused on a female audience , offering both shopping and beauty salon booking . Implemented responsive UI , integrated complex backend APIS and optimized user experience for production-ready delivery</p>
                <div className={styles.line__exp}>
                <p>Reactjs</p>
                <p>Nextjs</p>
              <p>firebase</p>
                <p>REST APIS</p>
              <p>Payment Methods</p>
              <p>Localization</p>
                </div>
              </div>
            </div>
            <div className={`${styles.col} ${styles.skill__two}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200">
              <hr className={`${styles.line__right}`} />
              <div>
              <h4>2023 - 2024</h4>
              <h3>Front-end Developer</h3>
              <h2>Trauxit LLC</h2>
              </div>
              <div>
              <p>Worked on responsive web platforms for logistics, cash management, and fashion e-commerce. Built dynamic UIs using React.js, Next.js, and integrated REST APIs. Focused on performance, animations, and mobile-first design. Collaborated closely with cross-functional teams across Egypt and the US.</p>
              <div className={styles.line__exp}>
                <p>Reactjs</p>
                <p>REST APIS</p>
                <p>TomTom Map</p>
                <p>Localization</p>
                <p>React Redux</p>
              </div>
              </div>
            </div>
            <div className={`${styles.col} ${styles.skill__three}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200">
              <hr className={`${styles.line__left}`} />
              <div>
              <h4>Mar 2024 - Nov 2024</h4>
              <h3>Front-end Developer</h3>
              <h2>LXDYI</h2>
              </div>
              <div>
              <p>Worked on multiple custom dashboards including a medical clinic system, a perfume inventory manager, and a school management portal. Focused on building responsive and dynamic UIs using React.js, and API integration.</p>
              <div className={styles.line__exp}>
                <p>Reactjs</p>
                <p>REST APIS</p>
                <p>Localization</p>
              </div>
              </div>
            </div>
            <div className={`${styles.col} ${styles.skill__four}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200">
              <hr className={`${styles.line__right}`} />
              <div>
              <h4>2019 - 2023</h4>
              <h3>Bachelor of Science in computer science</h3>
              <h2>Helwan University</h2>
              </div>
              <div>
              <p>Studied core subjects including algorithms, data structures, databases, software engineering, and web development. Gained a solid foundation in programming and problem-solving, with practical experience in both individual and team-based projects.</p>
              </div>
            </div>
            <div className={`${styles.col} ${styles.skill__five}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200">
              <hr className={`${styles.line__left}`} />
              <div>
              <h4>2022</h4>
              <h3>React Development Cross-Skilling , Professional Front-End Web Development</h3>
              <h2>Udacity Nanodegree</h2>
              </div>
              <div>
              <p>Completed multiple Nanodegree programs including React Development Cross-Skilling and Professional Front-End Web Development, gaining in-depth experience in building modern, scalable web applications. Developed real-world projects using React.js, JavaScript, HTML/CSS, API integration, and responsive design best practices.</p>
              </div>
            </div>
          </div>



      </section>
    </>
  )
}

export default Experience
