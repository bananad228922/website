import { i, style } from 'framer-motion/client';
import styles from './HorizontalSrollingCard.module.css';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { array } from 'three/tsl';


gsap.registerPlugin(ScrollTrigger);

export function HorizontalScrollingContainer({children}) {
    const containerRef = useRef(null);

    useEffect(() => {
        // 綁定 Loco
        const locoScroll = window.locoScroll;
        const scrollEl = document.querySelector('[data-scroll-container]');
        const container = containerRef.current;
    
        if (!locoScroll || !scrollEl || !container) {
          console.warn("⚠️ locoScroll 尚未準備好或找不到元素");
          return;
        }
    
        // 💡 設定 scrollerProxy
        ScrollTrigger.scrollerProxy(scrollEl, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollEl.style.transform ? "transform" : "fixed",
        });
    
        locoScroll.on("scroll", ScrollTrigger.update);

        // GSAP 邏輯
        const scrollDistance = container.scrollWidth - window.innerWidth;
        console.log(scrollDistance);

        const ctx = gsap.context(() => {
            gsap.to(container, {
                x: () => -scrollDistance,
                scrollTrigger: {
                    trigger: container,
                    start: 'top top', 
                    end: () => `+=${scrollDistance}`,
                    scrub: true, 
                    pin: true,
                    scroller: scrollEl,
                }
            })
        })

        return () => ctx.revert();
    }, [])



    return (
        <div className={styles['container']} ref={containerRef}>
            <div className={styles['cardShowcase']}>
                {children}
            </div>
        </div>
    )
};

export function HorizontalScrollingCard({src}) {
    const cardRef = useRef(null);
    useEffect(() => {
        const loco = window.locoScroll;
        if(!loco || !cardRef.current) {
            console.warn("無法綁定卡片透視");
            return;
        }

        const perspective = () => {
            console.log("開始計算卡片透視");

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

        loco.on('scroll', perspective);

        return () => loco.off('scroll', perspective);
    }, [])

    return(
        <div className={styles.card} ref={cardRef}>
            <img src={src} />
            <div className={styles['card__overlay']}></div>
            <div className={styles['card__content']}></div>
        </div>
    )
}

// useCardIndexTracker:
// 1. 傳入卡片列表
// 2. 回傳最近卡片索引
export function useCardIndexTracker(cardRefs) {
    const offsets = cardRefs.current.map((card, i) => {
        return () => getCardOffset(card);
    })


    let nearestIndex;
    let nearestOffset;

    offsets.forEach((getOffset, i) => {
        const offset = getOffset();
        if(offset < nearestOffset) {
            nearestOffset = offset;
            nearestIndex = i;
        }
    })

    return nearestIndex;
}
// CardIndexHinter:
// 需要兩個參數，點點的數量和目標索引
// 回傳給定數量的點點DOM元素，並且標記目標索引點點
function CardIndexHinter({cardAmount, targetIndex}) {
    
    return (
        <>
            {Array.from({length: cardAmount}).map((_, i) => {
                return (
                    <div
                        className={classNames('dot', i === targetIndex ? 'active' : '')}
                    >
                    </div>
                )
            })}
        </>

    )
}

// 如何使用：目的｜使用CardIndexHinter
// 1. cardRefs變數：需要傳入cardRefs
// 2. cards變數：cardRefs哪裡來？創建卡片時分配組件給 cardRefs
// 3. cardIndexHinter：創建CardIndexHinter


const cardRefs = useRef([]);


// 創建卡片列表，之後看是要用children傳入還是要直接寫在hinter裡面
const cards = imgSrcs.map((_, i) => (
    <HorizontalScrollingCard
        ref = {(el) => {
            cardRefs.current[i] = el;
        }}
        key={i}
    />
))

const targetIndex = useCardIndexTracker(cardRefs);
const cardIndexHinter = (
    <CardIndexHinter
        cardAmount={cardRefs.current.length}
        targetIndex={targetIndex}
    >
    </CardIndexHinter>
)

const imgSrcs = [
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032515/Free_Book_Mockup_8_jy7wbm.png",
];




function getCardOffset(card) {
    const cardRect = card.getBoundingClientRect();

    const cardRectCenter = cardRect.left + cardRect.width / 2;
    const viewportCenter = window.innerWidth / 2;
    
    // offset
    const offset = (viewportCenter - cardRectCenter) / viewportCenter;

    return offset;
}
































export function HorizontalSrollingSnappingManager({children}) {
    useEffect(() => {
        const loco = window.locoScroll;
        if(!loco) return;

        const findNearCard = () => {

        }

        loco.on('scroll', () => {
            clearTimeout(timeoutId);
            const timeoutId = setTimeout(() => {
                // 1. 計算出snapto的位置
                // 2. scrollto
                const target = findNearCard();
                loco.scrollTo(target, {
                    duration: 1000,
                })
            }, 150)
        })
    }, [])

    return (
        <>
            {children}
        </>
    )
}