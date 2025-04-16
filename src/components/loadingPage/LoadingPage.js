import { progress } from "framer-motion";
import styles from "./LoadingPage.module.css"
import { useEffect, useState } from "react";

export function LoadingPage({progress}) {
    return (
        <div className={styles.BG}>
            <div className={styles.textWrapper}>
                <h1>It loading...</h1>
                <p>{progress}</p>
            </div>
            <div className={styles.loadingBarWrapper}>
                <div className={styles.loadingBar} style={{width: `${progress}%`}}></div>
            </div>

        </div>
    )
}

export function useLoadingImage(srcs, loadingPageRef, loadingMainRef) {
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
                        loadingMainRef.current.classList.add("active");
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