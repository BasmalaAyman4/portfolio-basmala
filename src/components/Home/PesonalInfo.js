import React, { useEffect, useState } from 'react'
import styles from '../../styles/personalinfo.module.css'
const PesonalInfo = () => {
    const handleDownload = () => {
        // استبدلي هذا الرابط برابط ملفك الفعلي
        const fileUrl = "https://drive.google.com/uc?export=download&id=1u44W_CYyhrJMM2eIcEz1zJ3V7xgpltAR";
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Basmala-Ayman-CV.pdf'; // اسم الملف عند التحميل
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <section className={`${styles.personal__sec}`} id="home">


                <div className={styles.personal__body}>
                    <h2>Basmala</h2>
                    <div className={styles.hr}></div>
                    <div className={styles.personal__para}>
                        <p>I am a ux & frontend engineer passionate </p>
                        <p>about building great user experiences</p>
                        <div className={styles.social__btn}>
                            <button className={`${styles.btn} ${styles.type1}`} onClick={handleDownload}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                                    ></path>
                                </svg> <span className={`${styles.btntxt}`}>Download CV</span>
                            </button>
                            <div className={`${styles.links}`}>
                                <a href='www.linkedin.com/in/basmala-ayman-2710101b8/' className={`${styles.link} ${styles.linkenin}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="25" height="25" viewBox="0 0 256 256" >
                                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                            <path d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                            <path d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </a>

                                <p onClick={(e) => { window.location.href = 'mailto:basmalaayman650@gmail.com'; }} className={`${styles.link} ${styles.gmail}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="25" height="25" viewBox="0 0 256 256" >
                                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                            <path d="M 0 18.987 c 0 -2.729 1.455 -5.085 3.892 -6.305 c 2.439 -1.22 5.201 -0.971 7.385 0.667 l 4.988 3.741 v 21.416 L 0 26.306 V 18.987 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                            <path d="M 16.265 78.084 H 3.795 C 1.703 78.084 0 76.381 0 74.289 V 33.084 l 16.265 12.199 V 78.084 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                            <polygon points="45,60.06 21.69,42.57 21.69,21.16 45,38.64 68.31,21.16 68.31,42.57 " transform="  matrix(1 0 0 1 0 0) " />
                                            <path d="M 90 74.289 c 0 2.092 -1.703 3.795 -3.795 3.795 h -12.47 V 45.283 L 90 33.084 V 74.289 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                            <path d="M 73.735 38.505 V 17.09 l 4.988 -3.741 v -0.001 c 2.18 -1.637 4.939 -1.888 7.381 -0.666 C 88.543 13.902 90 16.259 90 18.987 v 7.319 L 73.735 38.505 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </p>
                                <a href='https://github.com/BasmalaAyman4' className={`${styles.link} ${styles.github}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256" >
                                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                            <path d="M 45 0 C 20.147 0 0 20.467 0 45.714 C 0 67.034 14.367 84.944 33.802 90 c -0.013 -5.283 -0.03 -11.763 -0.04 -13.782 c -12.986 2.869 -15.726 -5.595 -15.726 -5.595 c -2.123 -5.481 -5.183 -6.939 -5.183 -6.939 c -4.236 -2.943 0.319 -2.883 0.319 -2.883 c 4.687 0.334 7.156 4.887 7.156 4.887 c 4.163 7.249 10.92 5.153 13.584 3.942 c 0.419 -3.064 1.628 -5.157 2.964 -6.341 c -10.368 -1.199 -21.268 -5.265 -21.268 -23.435 c 0 -5.177 1.824 -9.407 4.81 -12.728 c -0.485 -1.195 -2.083 -6.018 0.452 -12.55 c 0 0 3.92 -1.274 12.84 4.861 c 3.724 -1.051 7.717 -1.578 11.684 -1.596 c 3.967 0.018 7.963 0.545 11.694 1.596 c 8.91 -6.135 12.824 -4.861 12.824 -4.861 c 2.541 6.532 0.943 11.355 0.458 12.55 c 2.993 3.321 4.804 7.551 4.804 12.728 c 0 18.214 -10.92 22.223 -21.315 23.398 c 1.674 1.472 3.166 4.357 3.166 8.781 c 0 3.513 -0.016 11.601 -0.031 17.74 C 76.021 84.439 90 66.74 90 45.714 C 90 20.467 69.853 0 45 0 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </a>

                                <a href='https://wa.me/01018652532' className={`${styles.link} ${styles.whatsapp}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="25" height="25" viewBox="0 0 256 256" >
                                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                            <path d="M 0.576 44.596 C 0.573 52.456 2.626 60.129 6.53 66.892 L 0.201 90 l 23.65 -6.201 c 6.516 3.553 13.852 5.426 21.318 5.429 h 0.019 c 24.586 0 44.601 -20.009 44.612 -44.597 c 0.004 -11.917 -4.633 -23.122 -13.055 -31.552 C 68.321 4.65 57.121 0.005 45.188 0 C 20.597 0 0.585 20.005 0.575 44.595 M 14.658 65.727 l -0.883 -1.402 c -3.712 -5.902 -5.671 -12.723 -5.669 -19.726 C 8.115 24.161 24.748 7.532 45.201 7.532 c 9.905 0.004 19.213 3.865 26.215 10.871 c 7.001 7.006 10.854 16.32 10.851 26.224 c -0.009 20.439 -16.643 37.068 -37.08 37.068 h -0.015 c -6.655 -0.004 -13.181 -1.79 -18.872 -5.168 l -1.355 -0.803 l -14.035 3.68 L 14.658 65.727 z M 45.188 89.228 L 45.188 89.228 L 45.188 89.228 C 45.187 89.228 45.187 89.228 45.188 89.228" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                            <path d="M 34.038 25.95 c -0.835 -1.856 -1.714 -1.894 -2.508 -1.926 c -0.65 -0.028 -1.394 -0.026 -2.136 -0.026 c -0.744 0 -1.951 0.279 -2.972 1.394 c -1.022 1.116 -3.902 3.812 -3.902 9.296 c 0 5.485 3.995 10.784 4.551 11.529 c 0.558 0.743 7.712 12.357 19.041 16.825 c 9.416 3.713 11.333 2.975 13.376 2.789 c 2.044 -0.186 6.595 -2.696 7.524 -5.299 c 0.929 -2.603 0.929 -4.834 0.651 -5.299 c -0.279 -0.465 -1.022 -0.744 -2.137 -1.301 c -1.115 -0.558 -6.595 -3.254 -7.617 -3.626 c -1.022 -0.372 -1.765 -0.557 -2.509 0.559 c -0.743 1.115 -2.878 3.625 -3.528 4.368 c -0.65 0.745 -1.301 0.838 -2.415 0.28 c -1.115 -0.559 -4.705 -1.735 -8.964 -5.532 c -3.314 -2.955 -5.551 -6.603 -6.201 -7.719 c -0.65 -1.115 -0.069 -1.718 0.489 -2.274 c 0.501 -0.499 1.115 -1.301 1.673 -1.952 c 0.556 -0.651 0.742 -1.116 1.113 -1.859 c 0.372 -0.744 0.186 -1.395 -0.093 -1.953 C 37.195 33.666 35.029 28.154 34.038 25.95" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        </g>
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default PesonalInfo
