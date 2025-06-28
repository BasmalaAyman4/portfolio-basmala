import React, { useEffect, useRef } from 'react';
import styles from './styles/Loader.module.css';
import { gsap } from 'gsap';

const Loader = ({ onComplete }) => {
    const svgRef = useRef(null);
    const headingRef = useRef(null);
    const loaderWrapRef = useRef(null);

    useEffect(() => {
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
        const tl = gsap.timeline();
        tl.fromTo(
            headingRef.current,
            {
                y: 200,
                skewY: 10,
                opacity: 0
            },
            {
                y: 0,
                skewY: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }
        )
            .to(headingRef.current, {
                y: -200,
                skewY: -10,
                opacity: 0,
                duration: 0.8,
                ease: "power2.in",
                delay: 0.5
            });

        // SVG path animation
        tl.to(svgRef.current, {
            duration: 0.8,
            attr: { d: curve },
            ease: "power2.easeIn",
        })
            .to(svgRef.current, {
                duration: 0.8,
                attr: { d: flat },
                ease: "power2.easeOut",
            });

        // Loader wrap animation
        tl.to(loaderWrapRef.current, {
            y: -1500,
            duration:-1,
            ease: "power2.inOut"
        })
            .to(loaderWrapRef.current, {
                zIndex: -1,
                display: "none",
                onComplete: onComplete
            });

        return () => tl.kill();
    }, [onComplete]);

    return (
        <div ref={loaderWrapRef} className={styles.loaderWrap}>
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path ref={svgRef} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
            </svg>
            <div className={styles.loaderWrapHeading}>
                <span ><h1 ref={headingRef}>Front-End Developer</h1></span>
            </div>
        </div>
    );
};

export default Loader;