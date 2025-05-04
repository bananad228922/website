import { useEffect, useRef, useState } from 'react';
import styles from './TOC.module.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { style } from 'framer-motion/client';
import classNames from 'classnames';
import gsap from 'gsap';


export default function TOC() {
    const [sectionAmount, setSectionAmount] = useState(null);
    const dotProgressRef = useRef([]);


    useEffect(() => {
        const TOCNode = document.querySelectorAll("[data-TOC-node]");
        setSectionAmount(TOCNode.length);

        if (TOCNode.length === 0) return;
        gsap.context(() => {
            TOCNode.forEach((sec, i) => {
                ScrollTrigger.create({
                    trigger: sec,
                    start: "top bottom",
                    end: "bottom top",
                    onUpdate: (scrollTrigger) => {
        
                        const progress = scrollTrigger.progress;
                        dotProgressRef.current[i].style.transform = `scale(${progress})`;
                    },
                })
            })            
        })

    }, [sectionAmount])

    return (
        <div className={styles.TOC}>
            <div className={styles.dotsWrapper}>
                {Array.from({length: sectionAmount}).map((_, i) => {
                    return (
                        <div className={styles.dotWrapper}>
                            <div className={classNames(styles.dot, styles.default)}></div>
                            <div className={styles.dotScaleControlor} ref={(self) => {dotProgressRef.current[i] = self}}>
                                <div className={classNames(styles.dot, styles.progress)}></div>
                            </div>
                        </div>
                    )
                })}                
            </div>
        </div>
    )
}

const itemSpace = "0rem"