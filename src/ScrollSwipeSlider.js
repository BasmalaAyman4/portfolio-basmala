import React, { useState, useEffect, useRef, useCallback } from 'react';

const ScrollSwipeSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const containerRef = useRef(null);
    const touchStartRef = useRef(null);
    const wheelTimeoutRef = useRef(null);

    const slides = [
        {
            heading: 'SCROLL',
            image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=80&w=400',
            overlayImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTU4Mw&ixlib=rb-1.2.1&q=80&w=800',
            bgColor: '#6d597a'
        },
        {
            heading: 'SWIPE',
            image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=85&w=400',
            overlayImage: 'https://images.unsplash.com/photo-1594666757003-3ee20de41568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTcwOA&ixlib=rb-1.2.1&q=80&w=800',
            bgColor: '#355070'
        },
        {
            heading: 'SCROLL',
            image: 'https://images.unsplash.com/photo-1537165924986-cc3568f5d454?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=85&w=400',
            overlayImage: 'https://images.unsplash.com/photo-1579830341096-05f2f31b8259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTQ5Ng&ixlib=rb-1.2.1&q=80&w=800',
            bgColor: '#b56576'
        },
        {
            heading: 'SWIPE',
            image: 'https://images.unsplash.com/photo-1589271243958-d61e12b61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=80&w=400',
            overlayImage: 'https://images.unsplash.com/photo-1603771628302-c32c88e568e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTUxNg&ixlib=rb-1.2.1&q=80&w=800',
            bgColor: '#9a8c98'
        }
    ];

    const gotoSection = useCallback((index, direction) => {
        if (animating) return;

        setAnimating(true);
        const newIndex = ((index % slides.length) + slides.length) % slides.length;
        setCurrentIndex(newIndex);

        setTimeout(() => {
            setAnimating(false);
        }, 1000);
    }, [animating, slides.length]);

    const handleWheel = useCallback((e) => {
        e.preventDefault();

        if (wheelTimeoutRef.current) {
            clearTimeout(wheelTimeoutRef.current);
        }

        wheelTimeoutRef.current = setTimeout(() => {
            if (e.deltaY > 0) {
                gotoSection(currentIndex + 1, 1);
            } else {
                gotoSection(currentIndex - 1, -1);
            }
        }, 50);
    }, [currentIndex, gotoSection]);

    const handleTouchStart = useCallback((e) => {
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    }, []);

    const handleTouchEnd = useCallback((e) => {
        if (!touchStartRef.current) return;

        const touchEnd = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
        };

        const deltaX = touchEnd.x - touchStartRef.current.x;
        const deltaY = touchEnd.y - touchStartRef.current.y;

        if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
            if (deltaY > 0) {
                gotoSection(currentIndex - 1, -1);
            } else {
                gotoSection(currentIndex + 1, 1);
            }
        } else if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                gotoSection(currentIndex - 1, -1);
            } else {
                gotoSection(currentIndex + 1, 1);
            }
        }

        touchStartRef.current = null;
    }, [currentIndex, gotoSection]);

    const handleKeyDown = useCallback((e) => {
        if (animating) return;

        switch (e.code) {
            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                gotoSection(currentIndex - 1, -1);
                break;
            case 'ArrowDown':
            case 'ArrowRight':
            case 'Space':
            case 'Enter':
                e.preventDefault();
                gotoSection(currentIndex + 1, 1);
                break;
            default:
                break;
        }
    }, [currentIndex, gotoSection, animating]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('keydown', handleKeyDown);
            if (wheelTimeoutRef.current) {
                clearTimeout(wheelTimeoutRef.current);
            }
        };
    }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

    const containerStyle = {
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        height: '100vh',
        color: '#fff',
        background: '#4361ee',
        fontFamily: '"Inter", sans-serif',
        position: 'relative',
        userSelect: 'none'
    };

    const slideStyle = (index, bgColor) => ({
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: bgColor,
        opacity: index === currentIndex ? 1 : 0,
        visibility: index === currentIndex ? 'visible' : 'hidden',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex: index === currentIndex ? 2 : 1
    });

    const slideOuterStyle = (index) => ({
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        transform: index === currentIndex ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
    });

    const slideInnerStyle = (index) => ({
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        transform: index === currentIndex ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
    });

    const slideContentStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0
    };

    const slideContainerStyle = {
        position: 'relative',
        maxWidth: '1400px',
        width: '100vw',
        margin: '0 auto',
        height: '90vh',
        marginBottom: '10vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gridTemplateRows: 'repeat(10, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
        padding: '0 1rem'
    };

    const slideHeadingStyle = {
        display: 'block',
        textAlign: 'left',
        fontFamily: '"Inter", sans-serif',
        fontSize: 'clamp(5rem, 15vw, 15rem)',
        fontWeight: 900,
        margin: 0,
        padding: 0,
        color: '#f2f1fc',
        zIndex: 999,
        mixBlendMode: 'difference',
        gridArea: '2 / 2 / 3 / 10',
        alignSelf: 'end',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        letterSpacing: '-0.02em'
    };

    const slideImgContStyle = {
        margin: 0,
        marginTop: '4rem',
        gridArea: '2 / 1 / 7 / 8',
        overflow: 'hidden'
    };

    const slideImgStyle = (index) => ({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: index === currentIndex ? 'scale(1)' : 'scale(1.1)'
    });

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        pointerEvents: 'none'
    };

    const overlayContentStyle = {
        maxWidth: '1400px',
        width: '100vw',
        margin: '0 auto',
        padding: '0 1rem',
        height: '90vh',
        marginBottom: '10vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gridTemplateRows: 'repeat(10, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px'
    };

    const overlayImgContStyle = {
        position: 'relative',
        overflow: 'hidden',
        margin: 0,
        gridArea: '4 / 3 / 9 / 11'
    };

    const overlayImageStyle = (index) => ({
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '50% 50%',
        opacity: index === currentIndex ? 1 : 0,
        transform: index === currentIndex ? 'scale(1) translateX(0)' : 'scale(1.2) translateX(20%)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
    });

    const overlayCountStyle = {
        gridArea: '3 / 10 / 4 / 10',
        fontSize: 'clamp(3rem, 4vw, 15rem)',
        margin: 0,
        padding: 0,
        textAlign: 'right',
        borderBottom: '7px white solid',
        fontWeight: 900
    };

    const footerStyle = {
        position: 'fixed',
        zIndex: 999,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        width: '100%',
        height: '7em',
        fontFamily: '"Inter", sans-serif',
        fontSize: 'clamp(1.2rem, 2vw, 1rem)',
        pointerEvents: 'auto'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        transition: 'opacity 0.3s ease'
    };

    return (
        <>
           
            <div ref={containerRef} style={containerStyle}>
                {slides.map((slide, index) => (
                    <section
                        key={index}
                        style={slideStyle(index, slide.bgColor)}
                    >
                        <div style={slideOuterStyle(index)}>
                            <div style={slideInnerStyle(index)}>
                                <div style={slideContentStyle}>
                                    <div style={slideContainerStyle}>
                                        <h2 style={slideHeadingStyle}>{slide.heading}</h2>
                                        <figure style={slideImgContStyle}>
                                            <img style={slideImgStyle(index)} src={slide.image} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                <section style={overlayStyle}>
                    <div style={overlayContentStyle}>
                        <p style={overlayCountStyle}>
                            0<span>{currentIndex + 1}</span>
                        </p>
                        <figure style={overlayImgContStyle}>
                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    style={overlayImageStyle(index)}
                                    src={slide.overlayImage}
                                    alt=""
                                />
                            ))}
                        </figure>
                    </div>
                </section>

                
            </div>
        </>
    );
};

export default ScrollSwipeSlider;