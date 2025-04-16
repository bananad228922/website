import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./scrollVedioPlayer.module.css"


export function ScrollVedioPlayer({src}) {
    const videoRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (!videoRef.current) {
            console.error("videoRef is null");
            return;
        }

        console.log("videoRef: ", videoRef.current);

        const ctx = gsap.context(() => {
            videoRef.current.addEventListener("loadedmatadata", () => {
                gsap.to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                    scrollTrigger: {
                        trigger: videoRef.current,
                        start: "top top",
                        end: "+=2000",
                        scrub: 1,
                        pin: true,
                    },
                });
            })
        }, videoRef);

        return () => {
            ctx.revert();
        }
    }, []);

    return (
        <>
            <div className={styles.testBox}></div>
            <div className={styles.scrollVideoPlayer}>
                <video ref={videoRef} className={styles.video} muted>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>        
        </>

    )
}