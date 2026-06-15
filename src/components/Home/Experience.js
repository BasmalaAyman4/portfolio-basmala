import React, { useEffect, useRef } from 'react'
import styles from '../../styles/experience.module.css'
import Aos from 'aos'

const Experience = () => {
  const rowRef = useRef(null)
  const lineBodyRef = useRef(null)

  useEffect(() => {
    Aos.init({ duration: 800, easing: 'ease-in-sine' })
  }, [])

  useEffect(() => {
    const updateDots = () => {
      if (!rowRef.current || !lineBodyRef.current) return

      const lineBody = lineBodyRef.current
      const lineBodyRect = lineBody.getBoundingClientRect()

      // كل الكروت
      const cols = rowRef.current.querySelectorAll(`.${styles.col}`)
      // كل النقاط
      const dots = lineBody.querySelectorAll('[data-dot]')

      cols.forEach((col, i) => {
        if (!dots[i]) return
        const colRect = col.getBoundingClientRect()
        // المنتصف الرأسي للكارت نسبةً لـ lineBody
        const dotTop =
          colRect.top - lineBodyRect.top + colRect.height / 2
        dots[i].style.top = `${dotTop}px`
      })
    }

    // بعد الـ render مباشرة
    const timeout = setTimeout(updateDots, 100)
    window.addEventListener('resize', updateDots)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', updateDots)
    }
  }, [])

  const Dot = () => (
    <div
      data-dot
      className={styles.timelineDot}
      data-aos="fade-down"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <div className={styles.timelineDotInner}></div>
    </div>
  )

  return (
    <section className={styles.ThirdSec} id="experince">
      <h2 className={styles.skills__title}>Professional Experience</h2>
      <p className={styles.sectionSubtitle}>
        My professional journey in front-end development
      </p>

      {/* الخط الرأسي + النقاط */}
      <div className={styles.lines__body} ref={lineBodyRef}>
        <div className={styles.line__top}></div>
        <div className={styles.line__bottom}></div>
        <Dot /> {/* RAR-IT */}
        <Dot /> {/* GS App */}
        <Dot /> {/* CareComm */}
        <Dot /> {/* Trauxit */}
        <Dot /> {/* LXDYI */}
        <Dot /> {/* Helwan */}
        <Dot /> {/* Udacity */}
      </div>

      <div className={styles.row} ref={rowRef}>

        {/* Row 1 - Left: GS App | Right: RAR-IT */}
        <div className={`${styles.col} ${styles.left}`} data-aos="zoom-in" data-aos-duration="1200">
          <hr className={styles.line__left} />
          <div>
            <h4>2024 - Present</h4>
            <h3>Mid-Level Front-end Developer</h3>
            <h2>Gs For Application</h2>
          </div>
          <p>Building a startup e-commerce website focused on a female audience, offering both shopping and beauty salon booking. Implemented responsive UI, integrated complex backend APIs and optimized user experience for production-ready delivery.</p>
          <div className={styles.line__exp}>
            <p>React.js</p><p>Next.js</p><p>Firebase</p>
            <p>REST APIs</p><p>Payment Methods</p><p>Localization</p>
          </div>
        </div>

        <div className={`${styles.col} ${styles.right}`} data-aos="zoom-in" data-aos-duration="1200">
          <hr className={styles.line__right} />
          <div>
            <h4>Apr 2026 - Present</h4>
            <h3>Frontend Developer</h3>
            <h2>RAR-IT Design & Development LLC</h2>
          </div>
          <p>Specialized in building large-scale dashboard applications and business management systems. Developed transportation, logistics, service-provider, and administration platforms with advanced analytics, role management, real-time communication, and map integrations.</p>
          <div className={styles.line__exp}>
            <p>React.js</p><p>TypeScript</p><p>Redux Toolkit</p>
            <p>Socket.IO</p><p>Google Maps</p><p>Tailwind CSS</p>
            <p>Mantine UI</p><p>Vite</p>
          </div>
        </div>

        {/* Row 2 - Left: CareComm | Right: Trauxit */}
        <div className={`${styles.col} ${styles.left}`} data-aos="zoom-in" data-aos-duration="1200">
          <hr className={styles.line__left} />
          <div>
            <h4>Nov 2025 - Jun 2026</h4>
            <h3>Front-end Developer</h3>
            <h2>CareComm</h2>
          </div>
          <p>Developed and maintained modern web applications supporting digital marketing and client communication solutions. Built responsive interfaces, integrated APIs, and collaborated with cross-functional teams to deliver scalable and user-friendly products.</p>
          <div className={styles.line__exp}>
            <p>React.js</p><p>TypeScript</p><p>Apollo GraphQL</p>
            <p>REST APIs</p><p>Responsive Design</p><p>UI/UX</p>
          </div>
        </div>

        <div className={`${styles.col} ${styles.right}`} data-aos="zoom-in" data-aos-duration="1200">
          <hr className={styles.line__right} />
          <div>
            <h4>2023 - 2024</h4>
            <h3>Front-end Developer</h3>
            <h2>Trauxit LLC</h2>
          </div>
          <p>Worked on responsive web platforms for logistics, cash management, and fashion e-commerce. Built dynamic UIs using React.js, Next.js, and integrated REST APIs. Focused on performance, animations, and mobile-first design.</p>
          <div className={styles.line__exp}>
            <p>React.js</p><p>REST APIs</p><p>TomTom Map</p>
            <p>Localization</p><p>React Redux</p>
          </div>
        </div>

        {/* Row 3 - Left: LXDYI | Right: Helwan */}
        <div className={`${styles.col} ${styles.left}`} data-aos="zoom-in" data-aos-duration="1200">
          <hr className={styles.line__left} />
          <div>
            <h4>Mar 2024 - Nov 2024</h4>
            <h3>Front-end Developer</h3>
            <h2>LXDYI</h2>
          </div>
          <p>Worked on multiple custom dashboards including a medical clinic system, a perfume inventory manager, and a school management portal. Focused on building responsive and dynamic UIs using React.js and API integration.</p>
          <div className={styles.line__exp}>
            <p>React.js</p><p>REST APIs</p><p>Localization</p>
          </div>
        </div>

        <div className={`${styles.col} ${styles.right}`} data-aos="zoom-in" data-aos-duration="1200">
          <hr className={styles.line__right} />
          <div>
            <h4>2019 - 2023</h4>
            <h3>Bachelor of Science in Computer Science</h3>
            <h2>Helwan University</h2>
          </div>
          <p>Studied core subjects including algorithms, data structures, databases, software engineering, and web development. Gained a solid foundation in programming and problem-solving, with practical experience in both individual and team-based projects.</p>
        </div>

        {/* Row 4 - Left: Udacity (centered) */}
        <div className={`${styles.col} ${styles.left}`} data-aos="zoom-in" data-aos-duration="1200">
          <hr className={styles.line__left} />
          <div>
            <h4>2022</h4>
            <h3>React Development Cross-Skilling, Professional Front-End Web Development</h3>
            <h2>Udacity Nanodegree</h2>
          </div>
          <p>Completed multiple Nanodegree programs gaining in-depth experience in building modern, scalable web applications. Developed real-world projects using React.js, JavaScript, HTML/CSS, API integration, and responsive design best practices.</p>
        </div>

      </div>
    </section>
  )
}

export default Experience