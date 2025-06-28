import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/services.module.css';

const Services = () => {
    const [activeService, setActiveService] = useState(0);
    const activeBgRef = useRef(null);

    const services = [
        {
            id: 1,
            title: "Modern Web Development",
            description: "I build responsive, performant websites using React, Next.js, and modern JavaScript frameworks with clean code architecture and SEO best practices."
        },
        {
            id: 2,
            title: "UI/UX Implementation",
            description: "I transform design systems into pixel-perfect, accessible interfaces with attention to micro-interactions, animations, and cross-browser compatibility."
        },
        {
            id: 3,
            title: "Performance Optimization",
            description: "I specialize in optimizing web performance through code splitting, lazy loading, image optimization, and reducing bundle sizes for faster load times."
        },
        {
            id: 4,
            title: "Web Accessibility",
            description: "I ensure WCAG compliance by implementing proper ARIA labels, keyboard navigation, color contrast ratios, and screen reader compatibility."
        },
    ];

    const handleServiceHover = (index) => {
        setActiveService(index);
    };

    const handleServiceLeave = () => {
        setActiveService(0);
    };

    const updateActiveBackground = () => {
        const activeBg = activeBgRef.current;
        if (!activeBg) return;

        const currentItem = document.querySelector(`.${styles.serviceItem}[data-index="${activeService}"]`);
        if (currentItem) {
            const { offsetTop, offsetHeight } = currentItem;
            activeBg.style.top = `${offsetTop}px`;
            activeBg.style.height = `${offsetHeight}px`;
        }
    };

    useEffect(() => {
        updateActiveBackground();
    }, [activeService]);
    const handleTouchStart = (index) => {
        setActiveService(index);
    };
    return (
        <section className={styles.servicesSection} id="services">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>My Quality Services</h2>
                </div>

                <div className={styles.servicesContainer}>
                    <div className={styles.servicesWidget}>
                        <div ref={activeBgRef} className={styles.activeBackground} style={{ opacity: activeService !== -1 ? 1 : 0 }}></div>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`${styles.serviceItem} ${activeService === index ? styles.active : ''}`}
                                data-index={index}
                                onMouseEnter={() => handleServiceHover(index)}
                                onMouseLeave={handleServiceLeave}
                                onTouchStart={() => handleTouchStart(index)}
                                onClick={() => setActiveService(index)}
                            >
                                <div className={styles.serviceContent}>
                                    <div className={styles.serviceHeader}>
                                        <span className={styles.serviceNumber}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    </div>
                                    <div className={styles.serviceDescription}>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;