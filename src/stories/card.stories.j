import { useEffect, useLayoutEffect, useRef } from "react";
import { CardIndexHinter, CardInfoHinter, HScrollCard, HScrollContainer, Showcase } from "../components/card/HorizontalScrollingCard/HorizontalScrollingCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default {
    title: "card",
}

export const card = () => {
    return (
        <Temp />
    )
}

const Temp = () => {
    const cardRefs = useRef([]);
    const transformElRef = useRef(null);

    useLayoutEffect(() => {
        const lenis = new Lenis();
        window.lenis = lenis;

        // lenis.on("scroll", () => {
        //     console.log(lenis)
        // })

        lenis.on("scroll", ScrollTrigger.update());

        const update = (time) => {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        }
    }, [])

    return (
        <HScrollContainer transformElRef={transformElRef}>
            <Showcase ref={transformElRef}>
                {imgSrcs.map((_, i) => (
                    <HScrollCard
                        ref={(el) => {
                            cardRefs.current[i] = el;
                        }}
                        src={imgSrcs[i]}
                        key={i}
                    />
                ))}
            </Showcase>
            <CardInfoHinter cardRefs={cardRefs} cardInfos={cardInfos} />
            <CardIndexHinter cardRefs={cardRefs} />
        </HScrollContainer>
    )

}

const imgSrcs = [
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032515/Free_Book_Mockup_8_jy7wbm.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032515/Free_Book_Mockup_8_jy7wbm.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032515/Free_Book_Mockup_8_jy7wbm.png",
];


const cardInfos = [
    'Hand Calender',
    'Erratic Studio',
    'Wiredcore',
    'Hand Calender',
    'Erratic Studio',
    'Wiredcore',
    'Hand Calender',
    'Erratic Studio',
    'Wiredcore',
]