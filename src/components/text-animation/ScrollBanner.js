import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./ScrollBanner.module.css";
import classNames from "classnames";

export default function ScrollBanner({ children, origSpeed=5, scrollSpeed=1 }) {
    const containerRef = useRef(null);
    const velRef = useRef(0);
    
    useEffect(() => {
        const lenis = window.lenis;
        if (!lenis) {
            console.error("can't find lenis");
            return;
        }

        const handleScroll = () => {
            velRef.current = lenis.velocity * scrollSpeed;
        }
        lenis.on("scroll", handleScroll);

        const width = containerRef.current.getBoundingClientRect().width;
        let counter = 0;
        const speed = origSpeed;
        let velBuffer = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            
            velBuffer += velRef.current;
            const translateX = counter * speed + velBuffer;
            containerRef.current.style.transform = `translateX(${-(translateX % (width/5))}px)`;
            
            counter++;
        }
        animate();

        return () => {
            lenis.off("scroll", handleScroll);
        }

    }, [])

    return (
        <div className={styles.wrapper} ref={containerRef}>
            <div className={styles.content}>
                {Array.from({length: 5}).map((_, i) => children)}
            </div>

        </div>
    )
}

export function TestScrollBanner() {
    return (
        <>
            <div className="navBar-spacer"></div>
            <div style={{height: 1000}}></div>
            <ScrollBanner>
                <span>Hellow world </span>
            </ScrollBanner>        
            <div style={{height: 1000}}></div>
        </>

    )
}