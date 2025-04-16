import { useEffect, useRef, useState } from 'react';
import styles from './TOC.module.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { style } from 'framer-motion/client';
import classNames from 'classnames';


export default function TOC() {
    const [sectionAmount, setSectionAmount] = useState(null);
    const dotRefs = useRef([]);
    const lineRefs = useRef([]);

    useEffect(() => {
        const TOCNode = document.querySelectorAll("[data-TOC-node]");
        console.log("tocnode", TOCNode);
        setSectionAmount(TOCNode.length);
    }, [])

    useEffect(() => {
        if (!sectionAmount) return;
        
        const dots = dotRefs.current;
        const lines = lineRefs.current;
        const TOCNode = document.querySelectorAll("[data-TOC-node]");
        const lineHeight = document.querySelector(`.${styles["line-default"]}`).getBoundingClientRect().height;
        
        TOCNode.forEach((sec, i) => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top top",
                end: "bottom top",
                onUpdate: (scrollTrigger) => {
                    const progress = scrollTrigger.progress;

                    // console.log("current progress: ", progress);

                    const result = lineHeight * progress;

                    lines[i].style.height = `${result}px`;
                    if (progress === 1) {
                        dots[i].classList.add(styles["active"]);
                    }

                    if (i-1 !== -1) {
                        if (progress === 0) {
                            dots[i-1].classList.remove(styles["active"]);
                        }
                    }

                },
            })
        })
    }, [sectionAmount])



    return (
        <div className={styles['TOC']}>
            <div className={styles["wrapper"]}>
                <div className={classNames(styles['dot'], styles["active"])} style={{margin: itemSpace}}></div>

                {Array.from({length: sectionAmount}).map((_, i) => {
                    return (
                        <div className={styles["item"]} key={i}>
                            <div className={styles['lines-wrapper']}  style={{marginBottom: itemSpace}}>
                                <div className={styles['line-default']}></div>
                                <div className={styles['line-progress']} ref={(el) => (lineRefs.current[i] = el)}></div>
                            </div>

                            <div className={styles['dot']} ref={(el) => (dotRefs.current[i] = el)}  style={{marginBottom: itemSpace}}></div>
                        </div>
                    )
                })}                
            </div>
        </div>
    )
}

const itemSpace = "0rem"