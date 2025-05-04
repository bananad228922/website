import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const { UiDesign } = require("./uiDesign");

gsap.registerPlugin(ScrollTrigger)
export function UiDesignContainer() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                pin: true,
            })
        })

        return () => {
            ctx.revert();
        }

    })
    return(
        <>
            <div ref={containerRef}>
                <UiDesign>
                </UiDesign>
            </div>
            <div style={{height: 1000}}></div>
        </>

        
    )
}
