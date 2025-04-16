
import Card_protfolio from '../components/card/Card-portfolio.js';
import { useNavigate } from "react-router-dom";
import scrollToSection from '../script/index.js';
import Button from '../components/button/Button.js';
import '../styles/home.css'
import FadeInSection from '../components/FadeInSection.js';
import Tab_portfolio from '../components/tab/tab-portfolio.js';
import ThreeScene from '../components/ThreeScene.js';
import { useRef } from 'react';
import MotionButtonTest from '../components/button/motionButtonTest.js';
import ButtonWithIcon from '../components/button/buttonWithIcon.js';
import IconButton from '../components/button/IconButton.js';
import CardCollapseBase from '../components/card/CardCollapseBase.js';
import ScrollBanner from '../components/text-animation/ScrollBanner.js';
import Footer from '../components/Footer.js';
import { CardIndexHinter, CardInfoHinter, HScrollCard, HScrollContainer, Showcase } from '../components/card/HorizontalScrollingCard/HorizontalScrollingCard.js';
import TOC from '../components/TOC/TOC.js';


const aboutPara_1 = "創意不只是美學，而是解決問題的獨特方式，例如打造沉浸式的個人作品集網站，透過微互動、動畫、動態履歷讓訪客留下深刻印象，或開發一個 AI 生成 UI 設計工具，讓設計流程更自動化且高效。"
const aboutPara_2 = "在設計專案時，別只是執行，更要主動提供解決方案，如建議使用 AB 測試來優化 UI，分析競品 UX 並提出改進方向，或開發針對特定產業的設計系統，提高設計決策的價值。"
const aboutPara_3 = "與其做十個普通的設計，不如專注於一個高品質的作品，確保每個專案都有明確的設計目標、用戶數據支持，以及可驗證的成效，讓你的作品不只是好看，而是真正提升使用者體驗與商業價值。"



export default function Home() {
    const transformElRef = useRef(null);
    const cardRefs = useRef([]);

    return(
        <>
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



            {/*------------------------------ Video ------------------------------*/}
            <section class="home--video">
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
            <section className='home--video__spacer' data-color='dark'></section>

            <section class="home home--about" id="about" data-TOC-node>
                <div class="verticalText-container">
                    <h1 class="vertical-text vertical-text--white">About us</h1>
                </div>


                <div class="container">
                    <div class="home--about__content">
                        <FadeInSection>
                            <h1 className='display-1 m-b-xl'>
                                <span>我們一直</span>
                                <span className='orange'>相信.</span>
                                <br/>
                                給您最好
                                <br/>
                                不怕困難
                            </h1>
                        </FadeInSection>

                        <div className='p-l-xl p-r-xl flex-col gap-m'>
                        <FadeInSection>
                            <CardCollapseBase title="發揮創意">
                                <div className='flex-row gap-l'>
                                    <p className='paragraph-l white--secondary'>{aboutPara_1}</p>
                                    <img className="image-s" src='real-image.jpg'/>
                                </div>
                            </CardCollapseBase>
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapseBase title="提供想法">
                                <div className='flex-row gap-l'>
                                    <p className='paragraph-l white--secondary'>{aboutPara_2}</p>
                                    <img className='image-s' src='real-image.jpg'/>
                                </div>
                            </CardCollapseBase>                            
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapseBase title="以質勝量">
                                <div className='flex-row gap-l'>
                                    <p className='paragraph-l white--secondary'>{aboutPara_3}</p>
                                    <img className="image-s" src='real-image.jpg'/>
                                </div>
                            </CardCollapseBase>                            
                        </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>


            {/* ------------------------------ scroll banner ------------------------------ */}

            <section 
                className='home--scroll-banner p-b-xxl p-t-xxl' 
                data-color="dark"
            >
                <ScrollBanner>
                    <p className='home--scroll-banner__para'>
                        我們相信設計就是一切
                    </p>
                </ScrollBanner>
            </section>


            {/*------------------------------ Services ------------------------------*/}
            <section class="home home--services" data-color="dark" data-TOC-node>
                <div class="verticalText-container">
                    <h1 class="vertical-text vertical-text--white">Services</h1>
                </div>

                <div class="container">
                    <div class="home--services__content">
                        <FadeInSection>
                            <h1 className='display-1 m-b-xl'>
                                <span>我們一直</span>
                                <span className='orange'>相信.</span>
                                <br/>
                                給您最好
                                <br/>
                                不怕困難
                            </h1>
                        </FadeInSection>


                        <FadeInSection>
                            <CardCollapseBase title="網站設計">
                                <div className='flex-row'>
                                    <ul>
                                        <li>E-commerc</li>
                                        <li>ELanding</li>
                                        <li>EPromo-site</li>
                                        <li>Corporate website</li>
                                    </ul>
                                    <img src='real-image.jpg'/>
                                </div>
                            </CardCollapseBase>                            
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapseBase title="平面設計">
                                <div className='flex-row'>
                                    <ul>
                                        <li>E-commerc</li>
                                        <li>ELanding</li>
                                        <li>EPromo-site</li>
                                        <li>Corporate website</li>
                                    </ul>
                                    <img src='real-image.jpg'/>
                                </div>
                            </CardCollapseBase>                            
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapseBase title="動態設計">
                                <div className='flex-row'>
                                    <ul>
                                        <li>E-commerc</li>
                                        <li>ELanding</li>
                                        <li>EPromo-site</li>
                                        <li>Corporate website</li>
                                    </ul>
                                    <img src='real-image.jpg'/>
                                </div>
                            </CardCollapseBase>                            
                        </FadeInSection>

                        <FadeInSection>
                            <CardCollapseBase title="3D建模">
                                <div className='flex-row'>
                                    <ul>
                                        <li>E-commerc</li>
                                        <li>ELanding</li>
                                        <li>EPromo-site</li>
                                        <li>Corporate website</li>
                                    </ul>
                                    <img src='real-image.jpg'/>
                                </div>
                            </CardCollapseBase>                            
                        </FadeInSection>
                    </div>
                </div>
            </section>


            {/*------------------------------ Portfolio ------------------------------*/}
            <section class="home home--portfolio" id="portfolio" data-color="dark" data-TOC-node>
                <div class="verticalText-container">
                    <h1 class="vertical-text vertical-text--white">Protfolio</h1>
                </div>

                <div class="container">
                    <div class="home--portfolio__content">
                        <FadeInSection>
                            <h1 className='display-1 m-b-xl'>
                                <span>我們一直</span>
                                <span className='orange'>相信.</span>
                                <br/>
                                給您最好
                                <br/>
                                不怕困難
                            </h1>
                        </FadeInSection>


                        <Tab_portfolio />
                    </div>
                </div>
            </section>

            <section style={{height: 'fit-content',backgroundColor: '#232323',}} data-TOC-node>
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

            {/*------------------------------ Contact ------------------------------*/}
            <section class="home home--contact" id="contact" data-color="dark" data-TOC-node>
                <div class="verticalText-container">
                    <h1 class="vertical-text vertical-text--white">Contact</h1>
                </div>


                <div class="container">
                    <div class="home--contact__content">
                        <form class="home--contact__form">
                            <FadeInSection>
                                <h6 class="home--contact__header">
                                    <span>請填上這些資訊，</span>
                                    <span className='orange'>聯絡我們</span>
                                </h6>
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="home--contact__label" for="input-name">姓名</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-name"></input>
                                </div>
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="home--contact__label" for="input-gmail">電子郵件</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-gmail"></input>
                                </div>                                
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="home--contact__label" for="input-company">公司名稱</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-company"></input>
                                </div>                                
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="home--contact__label" for="input-class">需求項目</label>
                                    <input class="input input--outLine input--outLine--white" type="text" id="input-class"></input>
                                </div>                                
                            </FadeInSection>

                            <FadeInSection>
                                <div>
                                    <label class="home--contact__label" for="input-money">預算</label>
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

            <TOC sectionAmount={3} />
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