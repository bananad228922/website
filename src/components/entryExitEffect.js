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
            {children.split("").map((char, i) => <span style={{display: "inline-block"}}>{char}</span>)}
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
            {children.split("").map((char, i) => <span style={{display: "inline-block"}}>{char}</span>)}
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
            {children.split("").map((char, i) => <span style={{display: "inline-block"}}>{char}</span>)}
        </div>
    )
}




export function EntryLine({width, ease="power1.inOut"}) {
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(lineRef.current, {
                width: 0,
                ease: ease,
                duration: 1,

                scrollTrigger: {
                    trigger: lineRef.current,
                    start: "top center",
                }
            })
        });

        return () => {
            ctx.revert();
        }
    }, [])

    return(
        <div style={{width: width, height: 0.1, backgroundColor: "#ffffff"}} ref={lineRef}></div>
    )
}






export function TestFadein() {
    return (
        <>
            <div style={{height: 1000}}></div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="heading-1 white--primary">
                    <EntryLetters>我的名字是鐘文廷</EntryLetters>
                    <EntryLettersScrub>我的名字是鐘文廷</EntryLettersScrub>
                    <EntryLettersColorScrub>我的名字是鐘文廷</EntryLettersColorScrub>
                </div>

                <EntryBasic>
                    <CardCollapse title="hihihi" darkmode={true}>hihihihihihihihi</CardCollapse>
                </EntryBasic>
                <EntryLine width={100}/>
            </div>
            
            
            <div style={{height: 1000}}></div>
        </>
    )
}