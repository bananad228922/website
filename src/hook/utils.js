import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";



export const useUpdateLenis = (elRef) => {
    useEffect(() => {
        if (!elRef.current) {
            console.error("Element not found");
            return;
        }

        const observer = new ResizeObserver(() => {
            ScrollTrigger.refresh();
        })
        observer.observe(elRef.current);
        
        return () => {
            observer.disconnect();
        }
    }, [elRef])
}

export function useRetrieveRaf(func) {
    useEffect(() => {
        let rafId;
        const animate = () => {
            func();
            rafId = requestAnimationFrame(animate);
        }

        return () => {
            cancelAnimationFrame(rafId);
        }
    }, [])
}


export function useRetrieveGsapContext(func) {
    useEffect(() => {
        const ctx = gsap.context(func);

        return () => {
            if (ctx) {
                ctx.revert();
            }
        }
    }, [])
}


export function useGetMouseCoordinate(canvasRef) {
    const mouseRef = useRef({x: 0, y: 0});

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        const rect = canvasRef.current.getBoundingClientRect();

        const mousemoveHandle = (event) => {
            mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        }

        document.addEventListener("mousemove", mousemoveHandle);

        return () => {
            document.removeEventListener("mousemove", mousemoveHandle);
        }
    }, [canvasRef.current])

    return mouseRef;
}