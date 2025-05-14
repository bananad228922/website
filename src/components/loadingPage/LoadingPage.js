import { progress } from "framer-motion";
import styles from "./LoadingPage.module.css"
import { useEffect, useRef, useState } from "react";
import { img1, img2, img3 } from "../../variable";

export function LoadingPage({progress}) {
    return (
        <div className={styles.BG}>
            <div className={styles.textWrapper}>
                <h1>It loading...</h1>
            </div>

            <div className={styles.loadingBarWrapper}>
                <div className={styles.loadingBar} style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}

export function useLoadingImage(srcs, loadingPageRef) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let loadedCounter = 0;
        srcs.map((src, i) => {
            const img = new Image();
            img.src = src;

            const imgLoader = () => {
                loadedCounter++;
                const currentProgress = Math.floor((loadedCounter / srcs.length) * 100)
                setProgress(currentProgress);

                console.log(`${loadedCounter} images loaded, current progress ${currentProgress}`)
    
                if (loadedCounter === srcs.length) {
                    setTimeout(() => {
                        loadingPageRef.current.classList.add("hidden");

                        console.log("load complete");
                    }, 2000)
                }
            }

            if (img.complete) {
                imgLoader()
            } else {
                img.onload = () => {
                    imgLoader()
                }                
            }

        })
    }, [])

    return progress;
}


export function TestLoadingPage() {
    const loadingPageRef = useRef(null);
    const loadingMainRef = useRef(null);
    let progress = useLoadingImage(srcs, loadingPageRef, loadingMainRef);

    return (
        <>
            <div ref={loadingPageRef}>
                <LoadingPage progress={progress}/>
            </div>        
            <div ref={loadingMainRef}>
                <div style={{backgroundColor: "black", height: "100vh", width: "100vw"}}></div>
            </div>
        </>
    )
}

const srcs = [
    img1,
    img2,
    img3,
]