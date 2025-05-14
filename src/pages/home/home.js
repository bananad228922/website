import {Button} from '../../components/button/button/button.js';
import FadeInSection from '../../components/FadeInSection.js';
import Tab_portfolio from '../../components/tab/tab-portfolio.js';
import ThreeScene from '../../components/3d/ThreeScene.js';
import ButtonWithIcon from '../../components/button/buttonWithIcon/buttonWithIcon.js';
import CardCollapse from '../../components/card/cardCollapse/cardCollapse.js';
import ScrollBanner from '../../components/text-animation/ScrollBanner.js';
import Footer from '../../components/footer/Footer.js';
import { CardIndexHinter, CardInfoHinter, HScrollCard, HScrollContainer, Showcase } from '../../components/card/HorizontalScrollingCard/HorizontalScrollingCard.js';
import TOC from '../../components/TOC/TOC.js';
import { DefaultIcon, DefaultIconCapsule, DefaultIconOctahedron, DefaultIconTorus, DefaultIconTorusKnot, Icon3d, Icon3dInline } from '../../components/3d/icon3d.js';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './home.css'
import { Background3d, Background3dLight } from '../../components/3d/background3d.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DraggableScene, Portfolio3d } from '../../components/3d/portfolio3d.js';
import IconButton from '../../components/button/iconButton/iconButton.js';
import { EntryLine } from '../../components/entryExitEffect.js';
import { LoadingPage, useLoadingImage } from '../../components/loadingPage/LoadingPage.js';
import { Mousefollow } from '../../components/mousefollow/mousefollow.js';
import stylesCard from '../../components/card/cardCollapse/cardCollapseBase.module.css';




const aboutPara_1 = "創意不只是美學，而是解決問題的獨特方式，例如打造沉浸式的個人作品集網站，透過微互動、動畫、動態履歷讓訪客留下深刻印象，或開發一個 AI 生成 UI 設計工具，讓設計流程更自動化且高效。"
const aboutPara_2 = "在設計專案時，別只是執行，更要主動提供解決方案，如建議使用 AB 測試來優化 UI，分析競品 UX 並提出改進方向，或開發針對特定產業的設計系統，提高設計決策的價值。"
const aboutPara_3 = "與其做十個普通的設計，不如專注於一個高品質的作品，確保每個專案都有明確的設計目標、用戶數據支持，以及可驗證的成效，讓你的作品不只是好看，而是真正提升使用者體驗與商業價值。"



gsap.registerPlugin(ScrollTrigger);
export default function Home() {
    const transformElRef = useRef(null);
    const cardRefs = useRef([]);
    const heroRef = useRef(null);
    const ctxRef = useRef(null);
    const verticalTextParalaxSpeed = 300;
    const loadingPageRef = useRef(null);
    const loadingMainRef = useRef(null);
    let progress = useLoadingImage(imgSrcs, loadingPageRef, loadingMainRef);

    useEffect(() => {
        ctxRef.current = gsap.context(() => {
            const enterHandle = () => {
                gsap.to(heroRef.current, {
                    transform: "scale(1)",
                    transformOrigin: "center top",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10, 
                    ease: "power1.out",
                });
            }

            const leaveHandle = () => {
                gsap.to(heroRef.current, {
                    transform: "scale(0.95)",
                    transformOrigin: "center top",
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50, 
                    ease: "power1.out",
                });
            }

            ScrollTrigger.create({
                trigger: heroRef.current,
                // markers: true,
                start: "-10% top",
                end: "10% top",
                onEnter: enterHandle,
                onEnterBack: enterHandle,
                onLeaveBack: leaveHandle,
                onLeave: leaveHandle,
            })
        })

        return () => {
            
            if(ctxRef) {
                ctxRef.current.revert();
                console.log("ctx 清除");
            }
            
        }
    }, [])



    return(
        <div className='overflow-x'>
            <div ref={loadingPageRef} className='loadingPage'>
                <LoadingPage progress={progress}/>
            </div>

            <div style={{position: "absolute", top: 2000 ,right: 0, zIndex: 1}}>
                <Paralax paralax={2000}>
                    <DefaultIconCapsule width="70vw" height="70vw" />
                </Paralax>
            </div>

            {/*------------------------------ Hero ------------------------------*/}
            <section className="hero" data-color="light" data-TOC-node ref={heroRef}>
                <FadeInSection>
                    <div className="navBar-spacer"></div>

                    <div className="container">
                        <div className="hero__contents">
                            <h1 className="display-1">
                                <span>你也同樣</span>
                                <span className='orange'>飄忽不定</span>
                                <span>嗎？</span>
                                <br />給同樣飄忽不定<br />
                                <span style={{position: "relative", display: "flex", alignItems: "center"}}>
                                    <span>的你.</span>
                                    {/* pointer */}
                                    {/* <span className='hero__pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1141.736 331.415">
                                            <g id="Group_59" data-name="Group 59" transform="translate(-516.6 -2696.561)">
                                                <path id="Path_25" data-name="Path 25" d="M21392.023,2707.168l155.1,155.1-155.1,155.1" transform="translate(-19910)" fill="none" stroke="currentColor" stroke-width="30"/>
                                                <path id="Path_26" data-name="Path 26" d="M22316.977,2862.268H21196.453" transform="translate(-20679.854)" fill="none" stroke="currentColor" stroke-width="30"/>
                                            </g>
                                        </svg>
                                    </span> */}
                                </span>

                            </h1>

                            <div className="hero__buttons">
                                <ButtonWithIcon size='medium'>聯絡我們</ButtonWithIcon>
                                <ButtonWithIcon size='medium'>作品集</ButtonWithIcon>
                            </div>





                            {/* 3d model */}
                            <div className='hero__three-scene'>
                                {/* <ThreeScene /> */}
                                <Paralax paralax={200} start='center center'>
                                    {(() => {
                                        const size = Math.min(Math.max(window.innerWidth * 0.9, 400), 1100);
                                        console.log("size", size);
                                        return (
                                            <DefaultIcon width={size} height={size}/>
                                        )
                                    })()}
                                    
                                </Paralax>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>



            {/*------------------------------ Video ------------------------------*/}
            <section class="video">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                        src="https://player.vimeo.com/video/1066106873?badge=0&autopause=0&player_id=0&app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        allowFullScreen
                        style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        }}
                        title="飄忽不定工作室 Erratic Studio｜Logo 形象動畫短片"
                    ></iframe>
                </div>
            </section>



            {/*------------------------------ About ------------------------------*/}
            <section className='video__spacer' data-color='dark'></section>

            <section class="home about" id="about" data-TOC-node>
                <div class="verticalText-container">
                    <Paralax paralax={verticalTextParalaxSpeed}>
                        <h1 class="vertical-text vertical-text--white">About us</h1>
                    </Paralax>
                    
                </div>

                <div class="container">
                    <div class="about__content">
                        <FadeInSection>
                            <div className='m-b-xl services__header'>
                                <div>
                                    <div style={{position: "relative", display: "flex", alignItems: "center"}}>
                                        <div style={{position: "absolute", top: 10, left:-1000}}>
                                            <EntryLine width={1000} ease='power1-out'/>
                                        </div>
                                        <p className='paragraph-m m-l-m m-b-m'>關於我們</p>
                                    </div>

                                    <h1 className='display-1'>
                                        <span>我們一直</span>
                                        <span className='orange'>相信.</span>
                                        <br/>
                                        給您最好
                                        <br/>
                                        不怕困難
                                    </h1>
                                </div>
                                <ButtonWithIcon>
                                    <p>觀看我的設計哲學</p>
                                </ButtonWithIcon>
                            </div>

                        </FadeInSection>


                        <div className='  flex-col gap-m'>
                        <FadeInSection>
                            <CardCollapse title="發揮創意" darkmode={true}>
                                <div className='hero__cardLayout'>
                                    <p className='paragraph-l white--secondary'>{aboutPara_1}</p>
                                    <DefaultIconOctahedron width={300} height={300}/>
                                </div>
                            </CardCollapse>
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapse title="提供想法" darkmode={true
                            }>
                                <div className='hero__cardLayout'>
                                    <p className='paragraph-l white--secondary'>{aboutPara_2}</p>
                                    <DefaultIconTorus  width={300} height={300}/>
                                </div>
                            </CardCollapse>                            
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapse title="以質勝量" darkmode={true
                            }>
                                <div className='hero__cardLayout'>
                                    <p className='paragraph-l white--secondary'>{aboutPara_3}</p>
                                    <DefaultIconTorusKnot width={300} height={300}/>
                                </div>
                            </CardCollapse>
                        </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>


            {/* ------------------------------ scroll banner ------------------------------ */}

            <section 
                className='scroll-banner' 
                data-color="dark"
                style={{position: 'relative', zIndex: 1, padding: "50px 0"}}
            >
                <ScrollBanner>
                    <span className='scroll-banner__para display-0'>我們相信設計就是一切</span>
                </ScrollBanner>
            </section>


            {/*------------------------------ Services ------------------------------*/}
            <section class="home services" data-color="dark" data-TOC-node>
                <div class="verticalText-container">
                    <Paralax paralax={verticalTextParalaxSpeed}>
                        <h1 class="vertical-text vertical-text--white">Services</h1>
                    </Paralax>
                </div>

                <div class="container">
                    <div class="services__content">
                    <FadeInSection>
                            <div className='m-b-xl services__header'>
                                <div>
                                    <div style={{position: "relative", display: "flex", alignItems: "center"}}>
                                        <div style={{position: "absolute", top: 10, left: -1000}}>
                                            <EntryLine width={1000} ease='power1-out'/>
                                        </div>
                                        <p className='paragraph-m m-l-m m-b-m'>服務項目</p>
                                    </div>
                                    
                                    <h1 className='display-1'>
                                        讓我們<br />
                                        同時幫你搞定<br />
                                        <span className='orange'>設計</span>與<span  className='orange'>技術</span>
                                    </h1>
                                </div>
                                <ButtonWithIcon>
                                    <p>了解我們的服務</p>
                                </ButtonWithIcon>
                            </div>

                        </FadeInSection>


                        <FadeInSection>
                            <CardCollapse title="網站設計" darkmode={true}>
                                <div className='flex-row paragraph-l'>
                                    <ul>
                                        <li>- ECommerc</li>
                                        <li>- ELanding</li>
                                        <li>- EPromo-site</li>
                                        <li>- Corporate Website</li>
                                        <li>- UI Design</li>
                                    </ul>
                                </div>
                            </CardCollapse>                            
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapse title="平面設計" darkmode={true}>
                                <div className='flex-row paragraph-l'>
                                    <ul>
                                        <li>- Branding</li>
                                        <li>- Logo Design</li>
                                        <li>- Poster Design</li>
                                        <li>- DM Design</li>
                                    </ul>
                                </div>
                            </CardCollapse>
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapse title="動態設計" darkmode={true}>
                                <div className='flex-row paragraph-l'>
                                    <ul>
                                        <li>- Logo Animation</li>
                                        <li>- Opening / Ending</li>
                                        <li>- Promo Video</li>
                                        <li>- 3D Animation</li>
                                    </ul>
                                </div>
                            </CardCollapse>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/*------------------------------ Portfolio ------------------------------*/}
            <section class="home portfolio" id="portfolio" data-color="dark" data-TOC-node>
                
                <div class="verticalText-container">
                    <Paralax paralax={verticalTextParalaxSpeed}>
                        <h1 class="vertical-text vertical-text--white">Protfolio</h1>
                    </Paralax>
                </div>

                <div class="container">
                    <div class="portfolio__content">
                        <FadeInSection>
                            <div className='m-b-xl services__header'>
                                <div>
                                    <div style={{position: "relative", display: "flex", alignItems: "center"}}>
                                        <div style={{position: "absolute", top: 10, left: -1000}}>
                                            <EntryLine width={1000} ease='power1-out'/>
                                        </div>
                                        <p className='paragraph-m m-l-m m-b-m'>作品集</p>
                                    </div>
                                    
                                    <h1 className='display-1'>
                                        在這裏
                                        <br />
                                        觀看我所有的
                                        <br />
                                        <span className='orange'>作品集</span>
                                    </h1>
                                </div>
                                <ButtonWithIcon>
                                    <p>觀看更完整的作品集</p>
                                </ButtonWithIcon>
                            </div>
                        </FadeInSection>


                        {/* <Tab_portfolio /> */}
                    </div>
                </div>
            </section>

            <div style={{zIndex: 1, position: "relative", marginTop: -500}}>
                <Portfolio3d />
            </div>
            

            {/* <section style={{height: 'fit-content', zIndex:1, position: "relative"}} data-TOC-node>
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
            </section> */}

            

            {/*------------------------------ Contact ------------------------------*/}
            <section class="home contact" id="contact" data-color="dark" data-TOC-node>
                <div class="verticalText-container">
                    <Paralax paralax={verticalTextParalaxSpeed}>
                        <h1 class="vertical-text vertical-text--white">Contact</h1>
                    </Paralax>
                </div>


                <div class="container">
                    <div class="contact__content">
                        <form class="contact__form">
                            <FadeInSection>
                                <h6 class="contact__header">
                                    <span>請填上這些資訊，</span>
                                    <span className='orange'>聯絡我們</span>
                                </h6>
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="contact__label" for="input-name">姓名</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-name"></input>
                                </div>
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="contact__label" for="input-gmail">電子郵件</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-gmail"></input>
                                </div>                                
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="contact__label" for="input-company">公司名稱</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-company"></input>
                                </div>                                
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="contact__label" for="input-class">需求項目</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-class"></input>
                                </div>                                
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="contact__label" for="input-money">預算</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-money"></input>
                                </div>                                
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <Button kind='primary'>送出</Button>
                                </div>                                
                            </FadeInSection>

                        </form>

                    </div>
                </div>
            </section>

            <Footer />

            <TOC />
            <Mousefollow triggers= {`.${stylesCard.header}`}>
                Click
            </Mousefollow>
            
            <div style={{position: "fixed", top: 0, left: 0}}><Background3dLight /></div>
            <div style={{position: "fixed", right: 20, bottom: 20, zIndex: 1 , transform: "rotate(-90deg)"}}>
                <IconButton size='large' roundness={true} onClick={() => {window.lenis.scrollTo(0)}}/>
            </div>                
        </div>
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



export function Paralax({children, paralax=0, start="top bottom", markers=false}) {
    const containerRef = useRef();
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(containerRef.current, {
                y: paralax,
                scrollTrigger: {
                    markers: markers,
                    trigger: containerRef.current, 
                    start: start, // 元素出現後開始
                    end: `bottom+=${paralax} top`, // 元素退出後結束
                    scrub: true,
                }
            })            
        })


        return() => {
            ctx.revert();
        }
    }, [])

    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
}