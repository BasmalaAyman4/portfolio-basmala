import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../../data/projectsData'
import styles from '../../styles/projectdetail.module.css'
import pageStyles from '../../styles/projectdetailpage.module.css'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === Number(id))

  const [activeMedia, setActiveMedia] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [touchStart, setTouchStart] = useState(null)
  const videoRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ── Derive media AFTER the early-return guard ──────────────────
  const media = project
    ? project.media?.length
      ? project.media
      : [{ type: 'image', src: project.image, alt: project.title }]
    : []

  const totalMedia = media.length

  const nextMedia = useCallback(() => {
    setIsVideoPlaying(false)
    setActiveMedia(i => (i + 1) % totalMedia)
  }, [totalMedia])

  const prevMedia = useCallback(() => {
    setIsVideoPlaying(false)
    setActiveMedia(i => (i - 1 + totalMedia) % totalMedia)
  }, [totalMedia])

  useEffect(() => {
    if (!project) return
    const handleKey = e => {
      if (e.key === 'ArrowRight') nextMedia()
      if (e.key === 'ArrowLeft') prevMedia()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [nextMedia, prevMedia, project])

  const handleTouchStart = e => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = e => {
    if (!touchStart) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? nextMedia() : prevMedia()
    setTouchStart(null)
  }

  // ── Guard: project not found ────────────────────────────────────
  if (!project) {
    return (
      <div className={pageStyles.notFound}>
        <h2>Project not found</h2>
        <button onClick={() => navigate('/#projects')}>← Back to Projects</button>
      </div>
    )
  }

  const currentMedia = media[activeMedia]

  return (
    <div className={pageStyles.page}>

      {/* ── Header ── */}
      <header className={pageStyles.pageHeader}>
        <button className={pageStyles.backBtn} onClick={() => navigate('/#projects')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          <span>Back</span>
        </button>

     

        
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.visitBtn}
          >
            <svg width="14" height="14" viewBox="0 0 14 15" fill="none">
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>
            Visit Live
          </a>
        
      </header>

      {/* ── Body ── */}
      <div className={pageStyles.body}>

        {/* Media */}
        <div
          className={pageStyles.mediaSection}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={pageStyles.mediaStage}>
            {currentMedia?.type === 'video' ? (
              <div className={styles.videoWrapper}>
                {currentMedia.embedUrl ? (
                  <iframe
                    src={currentMedia.embedUrl}
                    title={currentMedia.alt || 'Project video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoIframe}
                  />
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      src={currentMedia.src}
                      poster={currentMedia.poster}
                      className={styles.video}
                      controls={isVideoPlaying}
                    />
                    {!isVideoPlaying && (
                      <button
                        className={styles.playBtn}
                        onClick={() => { setIsVideoPlaying(true); videoRef.current?.play() }}
                        aria-label="Play video"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    )}
                  </>
                )}
              </div>
            ) : (
              <img
                src={currentMedia?.src}
                alt={currentMedia?.alt || project.title}
                className={pageStyles.mainImage}
              />
            )}

            {totalMedia > 1 && (
              <>
                <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prevMedia} aria-label="Previous">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button className={`${styles.navBtn} ${styles.navNext}`} onClick={nextMedia} aria-label="Next">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {totalMedia > 1 && (
            <div className={styles.thumbnailRail}>
              {media.map((item, i) => (
                <button
                  key={i}
                  className={`${styles.thumbnail} ${i === activeMedia ? styles.thumbnailActive : ''}`}
                  onClick={() => { setActiveMedia(i); setIsVideoPlaying(false) }}
                  aria-label={`Media ${i + 1}`}
                >
                  <img
                    src={item.poster || item.src}
                    alt=""
                    className={styles.thumbImg}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={pageStyles.contentPanel}>
          <nav className={styles.tabs}>
            {['overview', 'tech', 'highlights'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          <div className={styles.tabContent}>

            {activeTab === 'overview' && (
              <div>
                <p className={styles.description}>{project.description}</p>
                {project.longDescription && (
                  <p className={styles.longDescription}>{project.longDescription}</p>
                )}
                {project.role && (
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Role</span>
                    <span className={styles.metaValue}>{project.role}</span>
                  </div>
                )}
                {project.year && (
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Year</span>
                    <span className={styles.metaValue}>{project.year}</span>
                  </div>
                )}
                {project.client && (
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Client</span>
                    <span className={styles.metaValue}>{project.client}</span>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'tech' && (
              <div>
                {project.techStack
                  ? project.techStack.map((group, gi) => (
                      <div key={gi} className={styles.techGroup}>
                        <h4 className={styles.techGroupLabel}>{group.label}</h4>
                        <div className={styles.techPills}>
                          {group.items.map((tech, ti) => (
                            <span key={ti} className={styles.techPill}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    ))
                  : (
                    <div className={styles.techPills}>
                      {(project.tech || []).map((t, i) => (
                        <span key={i} className={styles.techPill}>{t}</span>
                      ))}
                    </div>
                  )
                }
              </div>
            )}

            {activeTab === 'highlights' && (
              <ul className={styles.highlightsList}>
                {(project.highlights || [
                  'Responsive across all screen sizes',
                  'Integrated with REST APIs',
                  'Optimized for performance',
                ]).map((h, i) => (
                  <li key={i} className={styles.highlight}>
                    <span className={styles.highlightDot} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage