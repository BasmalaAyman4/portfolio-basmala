import React, { useEffect, useRef } from 'react'
import gg from '../assets/beneshty.png'
import pm from '../assets/pm.png'
import shein from '../assets/shein.png'
import etruk from '../assets/etruk.png'
import styles from '../styles/projects.module.css'
import cash from '../assets/cash.png'
import dash from '../assets/dash.png'
import shipdash from '../assets/DASH2.PNG'
import stock from '../assets/stock.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import adminpanel from '../assets/Untitled design.png'
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "BeNeshty",
            description: "A modern, responsive online store for cotton clothing, built with Next.js.The platform includes product browsing, search and filtering, multilingual support, and a secure checkout process",
            image: gg,
            category: "E-commerce",
            url: "https://beneshty.com/"
        },
        {
            id: 2,
            title: "Mehrail PM",
            description: "An Egyptian clothing brand offering modern, minimal everyday wear for women.Focused on comfort, high- quality fabrics, and trendy designs, with active social media presence for sales and customer engagement.",
            image: pm,
            category: "E-commerce",
            url: "https://mehrailpm.com/"
        },
        {
            id: 3,
            title: "Shein Stuff",
            description: "A trendy fashion destination offering a wide range of imported Shein apparel for women. From casual wear to chic dresses, Shein Stuff brings the latest fashion trends at affordable prices.",
            image: shein,
            category: "E-commerce",
            url: "https://sheinstuff.com/"
        },
        {
            id: 4,
            title: "Etruk Athar",
            description: "A platform dedicated to making a positive impact by connecting individuals with charitable causes, poverty alleviation initiatives, and volunteering opportunities. We aim to empower communities...",
            image: etruk,
            category: "Charities",
            url: "https://drive.google.com/file/d/15Galft6_yVIlKigYJl3d41i2g8G_jbYs/view?usp=drive_link"
        },
        {
            id: 5,
            title: "Trauxit Cash",
            description: "providing businesses and individuals with reliable, fast, and secure methods for digital and physical payments.With a focus on advanced security measures, we ensure your transactions are safe",
            image: cash,
            category: "Payment",
            url: "https://cash-kohl.vercel.app/"
        },
        {
            id: 6,
            title: "Genuis System Admin Panel",
            description: "Built an E-commerce Dashboard with product/category management, order tracking, customer order creation, banners, and notifications.Implemented real-time chat with per-customer control and role-based permissions.",
            image: adminpanel,
            category: "Dashboard",
            url: "https://drive.google.com/file/d/1pdlDLh7GEYH5Vl0_zoBFM1K11JzV9lBF/view?usp=sharing"
        },
        {
            id: 7,
            title: "Trauxit Dashboard",
            description: "Developed, and maintained a Dashboard by building reusable components, and a responsive layout can share your posts with other people and chat with them create shipment deatils and view who will...",
            image: dash,
            category: "Dashboard",
            url: "https://drive.google.com/file/d/12cThw0IeWOwk1d79465zPAvFMKdgRFnu/view"
        },
        {
            id: 8,
            title: "Shipments Dashboard",
            description: "Built a logistics dashboard using React.js, TomTom Maps, and Chart.js. Developed features to create shipments, track package routes on interactive maps, and visualize revenue and distance data with charts",
            image: shipdash,
            category: "Dashboard",
            url: "https://drive.google.com/file/d/1W6H_HTAAZADHQZQL5mZHsZWa2yPTXgP2/view?usp=sharing"
        },
        {
            id: 9,
            title: "Stock Dashboard",
            description: " Built a stock management dashboard,track available stock, and identify out-of-stock items. Included options to assign products to people and print receipts without calculating salary, plus revenue charts to monitor sales",
            image: stock,
            category: "Dashboard",
            url: "https://drive.google.com/file/d/1W6H_HTAAZADHQZQL5mZHsZWa2yPTXgP2/view?usp=sharing"
        },

    ];
    const cardRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((card, index) => {
            if (!card) return;

            const isLeftToRight = [0, 1, 4, 5].includes(index);
            const fromXPercent = isLeftToRight ? -50 : 50; // Translate relative to element width

            gsap.fromTo(
                card,
                { xPercent: fromXPercent, opacity: 0 },
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
            );
        });
    }, []);
    return (
        <>
            <section className={`${styles.project__sec}`} id="projects">
                <h2 className={styles.projects__title}>My Recent Works</h2>
                <div className={styles.cards}>
                    {
                        projects.map((project, index) => (
                            <div className={styles.card} ref={el => cardRefs.current[index] = el} key={project.id}>
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
                <div className={styles.btn__body}>
                    <button className={`${styles.button}`} onClick={()=>window.open('https://github.com/BasmalaAyman4')}>View More Projects</button>
                </div>



            </section>
        </>
    )
}

export default Projects
