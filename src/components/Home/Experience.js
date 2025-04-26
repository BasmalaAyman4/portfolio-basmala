import React from 'react'
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
