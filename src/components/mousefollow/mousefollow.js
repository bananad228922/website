import { use, useEffect, useRef, useState } from "react"
import styles from "./mousefollow.module.css"
import CardCollapse from "../card/cardCollapse/cardCollapse";
import gsap from "gsap";
import classNames from "classnames";
import styles_ from "../card/cardCollapse/cardCollapseBase.module.css";



export function Mousefollow({children, triggers}) {
    const containerRef = useRef(null)
    const [isHover, setIsHover] = useState(false);
    
    useEffect(() => {
        const mouse = {x: 0, y: 0};

        const mousemoveHandle = (e) => {
            mouse.y = e.clientY;
            mouse.x = e.clientX;
        }

        document.addEventListener("mousemove", mousemoveHandle)

        let rafId;
        const animate = () => {
            rafId = requestAnimationFrame(animate);
            gsap.to(containerRef.current, {
                top: mouse.y,
                left: mouse.x,
                // ease: "power1.inOut",
                duration: 0.7,
            })
        }
        animate();

        return () => {
            document.removeEventListener("mousemove", mousemoveHandle);
            cancelAnimationFrame(rafId);
        }
    }, [])

    useEffect(() => {
        const mouseentryHandle = () => {
            console.log("mouseenter");
            setIsHover(true);
        }
        const mouseleaveHandle = () => {
            setIsHover(false);
        }
        
        const triggers_ = document.querySelectorAll(triggers);

        triggers_.forEach((trigger) => {
            trigger.addEventListener("mouseenter", mouseentryHandle);
            trigger.addEventListener("mouseleave", mouseleaveHandle);
        })

        return () => {
            triggers_.forEach((trigger) => {
                trigger.removeEventListener("mouseenter", mouseentryHandle);
                trigger.removeEventListener("mouseleave", mouseleaveHandle);
            })
        }
    }, [])
    return (
        <div className={classNames(styles.container, isHover && styles.isHover)} ref={containerRef}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
    
}



export function TestMousefollow() {
    return (
        <>
            <div className="navBar-spacer"></div>


            <CardCollapse title="fuck you title" darkmode={true} data-hover="Click">
                    <p>hihihhihiihih</p>
            </CardCollapse>   

            <CardCollapse title="fuck you title" darkmode={true} data-hover="Click">
                    <p>hihihhihiihih</p>
            </CardCollapse>  

            <Mousefollow triggers= {`.${styles_.header}`}>
                Click
            </Mousefollow>
            
                  

            {/* <div ref={containerRef}>
                <Mousefollow>text</Mousefollow>
            </div> */}
        </>
    )
}