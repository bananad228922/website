import { use, useEffect, useRef, useState } from "react"
import styles from "./mousefollow.module.css"
import CardCollapse from "../card/cardCollapse/cardCollapse";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classNames from "classnames";



export function Mousefollow({children, isHover}) {
    const containerRef = useRef(null)
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

    return (
        <div className={classNames(styles.container, isHover && styles.isHover)} ref={containerRef}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

function TriggerBox() {
    const containerRef = useRef(null);
    const [isHover, setIsHover] = useState(false);
    console.log("component re-render");
    useEffect(() => {
        containerRef.current.addEventListener("mouseenter", () => {
            setIsHover(true);
        })
        containerRef.current.addEventListener("mouseleave", () => {
            setIsHover(false);
        })
    }, [])

    return (
        <div className={styles.box} ref={containerRef}>
            <Mousefollow isHover={isHover}>
                Click
            </Mousefollow>
        </div>
    )
}

export function TestMousefollow() {
    const containerRef = useRef(null);

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="navBar-spacer"></div>

            <TriggerBox />
            <CardCollapse title="fuck you title" darkmode={true} data-hover="Click">
                <p>hihihhihiihih</p>
            </CardCollapse>

            {/* <div ref={containerRef}>
                <Mousefollow>text</Mousefollow>
            </div> */}
        </>
    )
}