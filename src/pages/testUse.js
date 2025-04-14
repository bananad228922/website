import "locomotive-scroll/dist/locomotive-scroll.css";
import {CardIndexHinter, HScrollContainer, HScrollCard, Showcase, CardInfoHinter} from "../components/card/HorizontalScrollingCard/HorizontalScrollingCard.js";
import SmoothScroll from "../components/smoothScroll";
import ChildA from "../test/testReactRenderOrder.js";
import { use, useEffect, useRef } from "react";

export default function TestUse() {
    const transformElRef = useRef(null);
    const cardRefs = useRef([]);
    
    return (
        <SmoothScroll>
            <div style={{height: '50vh'}}></div>
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
            <div style={{height: '50vh'}}></div>
        </SmoothScroll>
    );
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