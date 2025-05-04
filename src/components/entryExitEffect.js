import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { use, useEffect, useRef } from "react";
import { triTable } from "three/examples/jsm/Addons";
import CardCollapse from "./card/cardCollapse/cardCollapse";

gsap.registerPlugin(ScrollTrigger);








export function EntryBasic({children}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                y: 100,
                opacity: 0,
                ease: "back.in",
                duration: 0.5,

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            })
        })

        return () => {
            ctx.revert();
        }
    }, [])

    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
}










export function EntryLetters({children}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const letters = containerRef.current.querySelectorAll("span");
        const ctx = gsap.context(() => {
            gsap.from(letters, {
                opacity: 0,
                y: 100,
                ease: "back.in",
                duration: 0.1,
                stagger: 0.05,

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                }
            })
        })

        return () => {
            ctx.revert();
        }
    }, [])
    

    return (
        <div ref={containerRef} style={{overflow: "hidden"}}>
            {children.split("").map((char, i) => <span className="heading-1 white--primary" style={{display: "inline-block"}}>{char}</span>)}
        </div>
    )
}



export function EntryLettersScrub({children}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const letters = containerRef.current.querySelectorAll("span");
        const ctx = gsap.context(() => {
            gsap.from(letters, {
                y: 100,
                ease: "back.in",
                duration: 0.1,
                stagger: 0.05,

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                }
            })
        })

        return () => {
            ctx.revert();
        }
    }, [])
    

    return (
        <div ref={containerRef} style={{overflow: "hidden"}}>
            {children.split("").map((char, i) => <span className="heading-1 white--primary" style={{display: "inline-block"}}>{char}</span>)}
        </div>
    )
}


export function EntryLettersColorScrub({children}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const letters = containerRef.current.querySelectorAll("span");
        const ctx = gsap.context(() => {
            gsap.from(letters, {
                color: "#777777",
                ease: "back.in",
                duration: 0.1,
                stagger: 0.05,

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                }
            })
        })

        return () => {
            ctx.revert();
        }
    }, [])
    

    return (
        <div ref={containerRef} style={{overflow: "hidden"}}>
            {children.split("").map((char, i) => <span className="heading-1 white--primary" style={{display: "inline-block"}}>{char}</span>)}
        </div>
    )
}




export function FadeinLine() {
    const lineRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(lineRef.current, {
                width: 0,
                ease: "back.inOut",
                duration: 1,

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                }
            })
        });

        return () => {
            ctx.revert();
        }
    }, [])

    return(
        <div style={{width: 500, height: 1}} ref={containerRef}>
            <div style={{width: "100%", height: "100%", backgroundColor: "#ffffff"}} ref={lineRef}></div>
        </div>
    )
}






export function TestFadein() {
    return (
        <>
            <div style={{height: 1000}}></div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <EntryLetters>我的名字是鐘文廷</EntryLetters>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <EntryLettersScrub>我的名字是鐘文廷</EntryLettersScrub>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <EntryLettersColorScrub>我的名字是鐘文廷</EntryLettersColorScrub>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <EntryBasic>
                    <CardCollapse title="hihihi" darkmode={true}>hihihihihihihihi</CardCollapse>
                </EntryBasic>
            </div>

            <FadeinLine />
            
            <div style={{height: 1000}}></div>
        </>
    )
}