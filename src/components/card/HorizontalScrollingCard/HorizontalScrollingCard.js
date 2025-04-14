import { i, style, text } from 'framer-motion/client';
import styles from './HorizontalSrollingCard.module.css';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import { array } from 'three/tsl';


gsap.registerPlugin(ScrollTrigger);

export function HScrollContainer({children, transformElRef}) {
    const containerRef = useRef(null);

    useEffect(() => {
        // GSAP 邏輯
        const container = containerRef.current;
        const scrollDistance = container.scrollWidth - window.innerWidth;

        const ctx = gsap.context(() => {
            gsap.to(transformElRef.current, {
                x: () => -scrollDistance,
                scrollTrigger: {
                    trigger: container,
                    start: 'top top', 
                    end: () => `+=${scrollDistance}`,
                    scrub: true, 
                    pin: true,
                    snap: {
                        snapTo: 1 / 9,
                    },
                }
            })
        })

        return () => ctx.revert();
    }, [])

    return (
        <div className={styles['container']} ref={containerRef}>
            {children}
        </div>
    )
};



export const Showcase = forwardRef(function Showcase({children}, ref) {
    return (
        <div className={styles['cardShowcase']} ref={ref}>
            {children}
        </div>
    )
})

export const HScrollCard = forwardRef(function HScrollCard({src}, ref) {
    const cardRef = useRef(null);

    useImperativeHandle(ref, () => cardRef.current, []);
    
    useEffect(() => {
        const lenis = window.lenis;
        if(!lenis || !cardRef.current) {
            console.warn("無法綁定卡片透視");
            return;
        }

        const perspective = () => {
            // console.log("開始計算卡片透視");

            const offset = getCardOffset(cardRef.current);

            const scale = 1 - Math.min(Math.abs(offset), 1) * 0.5;
            const rotateY = -offset * 30;
            const rotateX = -offset * 10;
            const rotateZ = -offset * 10;
            // const translateY = Math.abs(offset * 500);
            const translateY = offset * 1000;

            cardRef.current.style.transform = `
                perspective(1000px)
                scale(${scale})
                rotateY(${rotateY}deg)
                rotateX(${rotateX}deg)
                rotateZ(${rotateZ}deg)
                translateY(${translateY}px)
            `;
        };

        lenis.on('scroll', perspective);

        return () => lenis.off('scroll', perspective);
    }, [])

    return(
        <div className={styles.card} ref={cardRef}>
            <img src={src} />
            <div className={styles['card__overlay']}></div>
            <div className={styles['card__content']}></div>
        </div>
    )
})

/**
 * useCardIndexTracker:
 * 1. 傳入卡片列表
 * 2. 回傳最近卡片索引
*/
export function useCardIndexTracker(cardRefs) {
    const [nearestIndex, setNearestIndex] = useState(0);
    
    useEffect(() => {
        const lenis = window.lenis;
        if(!lenis || !cardRefs) {
            console.log("cardIndexTracker can't find loco or cardRefs");
            return;
        }

        // main function
        const getNearestCardIndex = () => {
            const offsets = cardRefs.current.map((card, i) => Math.abs(getCardOffset(card)));

            let nearestIndex;
            let nearestOffset = 10000;
            offsets.forEach((offset, i) => {
                if(offset < nearestOffset) {
                    nearestOffset = offset;
                    nearestIndex = i;
                }
            })

            setNearestIndex(nearestIndex);
        }

        lenis.on('scroll', getNearestCardIndex);
        return () => {
            lenis.off('scroll', getNearestCardIndex);
        }
    }, [])

    return nearestIndex;
}

/**
 * 1. 需要兩個參數，點點的數量和目標索引
 * 2. 回傳給定數量的點點DOM元素，並且標記目標索引點點
*/
export function CardIndexHinter({cardRefs}) {
    const cardAmount = cardRefs.current.length;
    const targetIndex = useCardIndexTracker(cardRefs);

    return (
        <div className={styles.dots}>
            {Array.from({length: cardAmount}).map((_, i) => {
                return (
                    <div
                        className={classNames(styles.dot, styles[i === targetIndex ? 'active' : ''])}
                    >
                    </div>
                )
            })}
        </div>

    )
}


export function CardInfoHinter({cardInfos, cardRefs}) {
    const targetIndex = useCardIndexTracker(cardRefs);

    return (
        <div className={styles.cardInfoWrapper}>
            <p className='paragraph-m white--secondary'>{cardInfos[targetIndex]}</p>
        </div>
    )
}



// utils
function getCardOffset(card) {
    const cardRect = card.getBoundingClientRect();

    const cardRectCenter = cardRect.left + cardRect.width / 2;
    const viewportCenter = window.innerWidth / 2;
    
    // offset
    const offset = (viewportCenter - cardRectCenter) / viewportCenter;

    return offset;
}