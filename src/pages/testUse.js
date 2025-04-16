import "locomotive-scroll/dist/locomotive-scroll.css";
import {CardIndexHinter, HScrollContainer, HScrollCard, Showcase, CardInfoHinter} from "../components/card/HorizontalScrollingCard/HorizontalScrollingCard.js";
import ChildA from "../test/testReactRenderOrder.js";
import { use, useEffect, useRef, useState } from "react";
import FadeInSection from "../components/FadeInSection.js";
import ButtonWithIcon from "../components/button/buttonWithIcon.js";
import MotionButtonTest from "../components/button/motionButtonTest.js";
import ThreeScene from "../components/ThreeScene.js";
import { LoadingPage, useLoadingImage } from "../components/loadingPage/LoadingPage.js";
// import ScrollVideoPlayer from "../components/scrollVedioPlayer/scrollVedioPlayer.js";
import { ScrollVedioPlayer } from "../components/scrollVedioPlayer/scrollVedioPlayer.js"


export default function TestUse() {
    const transformElRef = useRef(null);
    const cardRefs = useRef([]);
    const loadingPageRef = useRef();
    const loadingMainRef = useRef();

    let targetProgress = useLoadingImage(imgSrcs , loadingPageRef, loadingMainRef);
    const targetProgressRef = useRef(targetProgress);
    useEffect(() => {
        targetProgressRef.current = targetProgress;
    }, [targetProgress])

    const [animateProgress, setAnimateProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimateProgress((currentProgress) => {
                const diff = targetProgressRef.current - currentProgress;
                if (Math.abs(diff) < 10) return targetProgressRef.current;
                const nextProgress = currentProgress + diff * 0.1;
                // console.log("target progress: ", targetProgressRef.current, "current progress", currentProgress, "diff: ", diff, "next progress: ", nextProgress);
                return Math.floor(nextProgress);
            });
        }, 100);
    }, [])

    
    return (
        <>
            <ScrollVedioPlayer src="/playNode.mp4" />








            <div className="loading-page" ref={loadingPageRef}>
                <LoadingPage progress={animateProgress} />
            </div>
            
            <div className="loading-main" ref={loadingMainRef}>


                {/*------------------------------ Hero ------------------------------*/}
                <section className="home--hero" data-color="light" data-TOC-node>
                    <FadeInSection>
                        <div className="navBar-spacer"></div>

                        <div className="container">
                            <div className="home--hero__contents">
                                <h1 className="display-1">
                                    <span>你也同樣</span>
                                    <span className='orange'>飄忽不定</span>
                                    <span>嗎？</span>
                                    <br />給同樣飄忽不定<br />的你.
                                </h1>

                                <div className="home--hero__buttons">
                                    <ButtonWithIcon>聯絡我們</ButtonWithIcon>
                                    <MotionButtonTest>作品集</MotionButtonTest>
                                </div>

                                {/* pointer */}
                                <img style={{position: "absolute", transform: "scale(0.5) translate(0, 230px)"}} src='/pointer-white.svg'/>

                                {/* 3d model */}
                                <div className='home--hero__three-scene'>
                                    <ThreeScene />
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </section>

                <section
                    style={{
                        height: 'fit-content',
                        backgroundColor: '#232323',
                    }}
                >
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
                </section>
            </div>
        </>
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