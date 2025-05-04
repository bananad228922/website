import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styles from "./scrollVedioPlayer.module.css"
import { checkSrcCorrect } from "../../utils/utils.js";
// import '../../styles/styles.css';


gsap.registerPlugin(ScrollTrigger);

export function ScrollVedioPlayer({src}) {
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);
    const [requestCount, setRequestCount] = useState(0);
    const [readyState, setReadyState] = useState(0);
    

    useToAllScreen(videoContainerRef, videoRef);

    useEffect(() => {
        let ctx;

        async function checkVideo() {
            // 檢查所有後續會用到的變數
            if (!videoRef.current || !videoContainerRef.current) {
                console.error("videoRef or videoContainerRef is null");
                return;
            }
            const isSuccess = await checkSrcCorrect(src);
            if (!isSuccess) {
                console.error("video src is not correct");
                return;
            }


            // main
            if (videoRef.current.readyState < 1) {
                setRequestCount(requestCount + 1);

                setReadyState(requestCount);
                console.log("video not ready")
                return;
            }
    
            ctx = gsap.context(() => {
                console.log("video loaded");
    
                gsap.to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                    scrollTrigger: {
                        trigger: videoContainerRef.current,
                        start: "top top",
                        end: "+=2000",
                        scrub: 1,
                        pin: true,
                    },
                })
            });
        }

        checkVideo();

        return () => {
            ctx?.revert();
        }
    }, [readyState, requestCount]);

    return (
        <div className={styles.videoContainer} ref={videoContainerRef}>
            <video ref={videoRef} className={styles.video} muted>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}


function useToAllScreen(elContainerRef, elRef) {
    useEffect(() => {
        if (!elRef.current || !elContainerRef.current) {
            console.error("videoRef or boxRef is null");
            return;
        }

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: elContainerRef.current,
                start: "top top",
                onEnter: () => {
                    console.log("element enter");
                    elRef.current.classList.add(styles.videoActive);
                },
                onLeaveBack: () => {
                    console.log("element leave back");
                    elRef.current.classList.remove(styles.videoActive);
                },
            });
        });

        return () => {
            ctx.revert();
        }
    }, []);
  }
  