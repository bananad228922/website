import "locomotive-scroll/dist/locomotive-scroll.css";
import {CardIndexHinter, HScrollContainer, HScrollCard, Showcase, CardInfoHinter} from "../components/card/HorizontalScrollingCard/HorizontalScrollingCard.js";
import ChildA from "../test/testReactRenderOrder.js";
import { use, useEffect, useRef, useState } from "react";
import FadeInSection from "../components/FadeInSection.js";
import ButtonWithIcon from "../components/button/buttonWithIcon/buttonWithIcon.js";
import ThreeScene from "../components/3d/ThreeScene.js";
import { LoadingPage, useLoadingImage } from "../components/loadingPage/LoadingPage.js";
// import ScrollVideoPlayer from "../components/scrollVedioPlayer/scrollVedioPlayer.js";
import { ScrollVedioPlayer, TestScrollVedioPlayer } from "../components/scrollVedioPlayer/scrollVedioPlayer.js"


export default function TestUse() {
    return (
        <div>
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
                                <ButtonWithIcon>作品集</ButtonWithIcon>
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


            <ScrollVedioPlayer src="/playNode.mp4" />
            {/* <TestScrollVedioPlayer /> */}

            <div style={{height: "100vh"}}></div>
        </div>
    );
}
