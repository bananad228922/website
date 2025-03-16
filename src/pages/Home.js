import FoldableCard from '../components/FoldableCard.js';
import FoldableCard_2 from '../components/FoldableCard_2.js';
import Card_protfolio from '../components/card/Card-portfolio.js';
import { useNavigate } from "react-router-dom";
import scrollToSection from '../script/index.js';
import Button from '../components/button/Button.js';
import '../styles/home.css'
import FadeInSection from '../components/FadeInSection.js';

function Home() {
    const navigate = useNavigate();

    return(
        <div>
            {/* Hero */}
            <section className="home home--hero">
                <FadeInSection>
                    <div className="navBar-spacer"></div>

                    <div className="container">
                        <div className="home--hero__contents">
                            <h1 className="heading-1">你也同樣飄忽不定嗎？<br />給同樣飄忽不定<br />的你.</h1>

                            <div className="home--hero__buttons">
                                <Button kind='secondary' size='large' onClick={() => scrollToSection("contact")}>聯絡我們</Button>
                                <Button kind='outLine-secondary' size='large' onClick={() => navigate("/portfolio")}>作品集</Button>
                            </div>
                        </div>
                    </div>                    
                </FadeInSection>

            </section>



            {/* Video */}
            <section class="home--video">
                <div style={{ position: "relative", paddingTop: "56.25%", width: "100%", height: 0 }}>
                    <iframe 
                        src="https://player.vimeo.com/video/1066106873?badge=0&autopause=0&player_id=0&app_id=58479"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        allowFullScreen
                        title="飄忽不定工作室 Erratic Studio｜Logo 形象動畫短片"
                    ></iframe>
                </div>
            </section>


            {/* About */}
            <section class="home home--about" id="about">
                <div class="verticalText-container">
                    <h1 class="vertical-text vertical-text--white">About us</h1>
                </div>


                <div class="container">
                    <div class="home--about__content">
                        <h1 className='heading-1 white--primary'>
                            <span>我們一直</span>
                            <span className='orange'>相信</span>
                            <br/>
                            給您最好
                            <br/>
                            不怕困難
                        </h1>

                        <FadeInSection>
                            <FoldableCard 
                                title="發揮創意"
                                content="創意不只是美學，而是解決問題的獨特方式，例如打造沉浸式的個人作品集網站，透過微互動、動畫、動態履歷讓訪客留下深刻印象，或開發一個 AI 生成 UI 設計工具，讓設計流程更自動化且高效。"
                                id="toggle1"
                                imgSrc="real-image.jpg"
                            />                            
                        </FadeInSection>

                        <FadeInSection>
                            <FoldableCard 
                                title="提供想法"
                                content="在設計專案時，別只是執行，更要主動提供解決方案，如建議使用 AB 測試來優化 UI，分析競品 UX 並提出改進方向，或開發針對特定產業的設計系統，提高設計決策的價值。"
                                id="toggle2"
                                imgSrc="real-image.jpg"
                            />
                        </FadeInSection>

            
                        <FadeInSection>
                            <FoldableCard 
                                title="以質勝量"
                                content="與其做十個普通的設計，不如專注於一個高品質的作品，確保每個專案都有明確的設計目標、用戶數據支持，以及可驗證的成效，讓你的作品不只是好看，而是真正提升使用者體驗與商業價值。"
                                id="toggle3"
                                imgSrc="real-image.jpg"
                            />
                        </FadeInSection>

                    </div>
                </div>
            </section>

            {/* Services */}
            <section class="home home--services">
                <div class="verticalText-container">
                    <h1 class="vertical-text">Services</h1>
                </div>

                <div class="container">
                    <div class="home--services__content">
                        <FadeInSection>
                            <FoldableCard_2 
                                title="網站設計"
                                title_EN="Web Design"

                                content_1="E-commerce"
                                content_2="Landing"
                                content_3="Promo-site"
                                content_4="Corporate website"

                                id="card2-toggle1"
                                imgSrc="real-image.jpg"
                            />
                        </FadeInSection>


                        <FadeInSection>
                            <FoldableCard_2 
                                title="平面設計"
                                title_EN="Graphic design"

                                content_1="E-commerce"
                                content_2="Landing"
                                content_3="Promo-site"
                                content_4="Corporate website"
                                
                                id="card2-toggle2"
                                imgSrc="real-image.jpg"
                            />
                        </FadeInSection>



                        <FadeInSection>
                            <FoldableCard_2 
                                title="動態設計"
                                title_EN="Motion Graphic"

                                content_1="E-commerce"
                                content_2="Landing"
                                content_3="Promo-site"
                                content_4="Corporate website"
                                
                                id="card2-toggle3"
                                imgSrc="real-image.jpg"
                            />
                        </FadeInSection>


                        <FadeInSection>
                            <FoldableCard_2 
                                title="3D 建模"
                                title_EN="3D Model"

                                content_1="E-commerce"
                                content_2="Landing"
                                content_3="Promo-site"
                                content_4="Corporate website"
                                
                                id="card2-toggle4"
                                imgSrc="real-image.jpg"
                            />
                        </FadeInSection>

                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section class="home home--portfolio" id="portfolio">
                <div class="verticalText-container">
                    <h1 class="vertical-text">Protfolio</h1>
                </div>

                <div class="container">

                    <div class="home--portfolio__content">
                        {/* tabs labels */}
                        <FadeInSection>
                            <div class="portfolio__tags">
                                <div className='tag tag--no-style'> ALL TAGS</div>
                                <div class="tag tag--outLine tag--outLine--black">WEBSITE DESIGN</div>
                                <div class="tag tag--outLine tag--outLine--black">GRAPHIC DESIGN</div>
                                <div class="tag tag--outLine tag--outLine--black">MOTION GRAPHIC</div>
                                <div class="tag tag--outLine tag--outLine--black">3D MODEL</div>
                            </div>
                        </FadeInSection>

                        {/* tabs content */}
                        <FadeInSection>
                            <Card_protfolio 
                                cardHeader="日曆設計｜手的形式原理"
                                cardContent="使用「手」，並藉由美的形式原理所打造而成的雙日曆設計"
                                link="/portfolio_handCalender"
                                bgImage="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png"
                            />
                        </FadeInSection>


                        <FadeInSection>
                            <Card_protfolio 
                                cardHeader="印刷刊物設計｜怪核"
                                cardContent="怪核，是由純粹的空間所營造出來的恐懼、寂靜，這本書將會為你介紹何謂怪核，以及怪核的起源"
                                link="/portfolio_weirdcore"
                                bgImage="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032515/Free_Book_Mockup_8_jy7wbm.png"
                            />                            
                        </FadeInSection>


                        <FadeInSection>
                            <Card_protfolio 
                                cardHeader="品牌識別設計｜飄忽不定工作室"
                                cardContent="飄忽不定工作室，是一間主打「資源至上主義、內容變現和質大於量」的設計工作室，我們為他製作了一系列的設計系統、形象短片以及網站設計"
                                link="/portfolio_erratic"
                                bgImage="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png"
                            />                            
                        </FadeInSection>


                        <Button kind='outLine-secondary' onClick={() => navigate("/portfolio")}>看更多</Button>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section class="home home--contact" id="contact">
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
        </div>
    );
}

export default Home;