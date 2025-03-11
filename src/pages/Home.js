import FoldableCard from '../components/FoldableCard.js';
import FoldableCard_2 from '../components/FoldableCard_2.js';
import Card_protfolio from '../components/card/Card-portfolio.js';
import { useNavigate } from "react-router-dom";
import scrollToSection from '../script/index.js';
import Button from '../components/button/Button.js';
import '../styles/home.css'

function Home() {
    const navigate = useNavigate();

    return(
        <div>
            {/* Hero */}
            <section className="section section--hero">
            <div className="navBar-spacer"></div>

            <div className="container">
                <div className="section--hero__contents">
                    <h1 className="heading-1">你也同樣飄忽不定嗎？<br />給同樣飄忽不定<br />的你.</h1>

                    <div className="section--hero__buttons">
                        <Button kind='secondary' size='large' onClick={() => scrollToSection("contact")}>聯絡我們</Button>
                        <Button kind='outLine-secondary' size='large' onClick={() => navigate("/portfolio")}>作品集</Button>
                    </div>
                </div>

                <div className="line"></div>
            </div>
            </section>


            {/* Video */}
            <section class="section--video">
            </section>


            {/* About */}
            <section class="section section--about" id="about">
                <div class="verticalText-container">
                    <h1 class="vertical-text vertical-text--white">About us</h1>
                </div>


                <div class="container">
                    <div class="section--about__content">
                        <FoldableCard 
                            title="發揮創意"
                            content="創意不只是美學，而是解決問題的獨特方式，例如打造沉浸式的個人作品集網站，透過微互動、動畫、動態履歷讓訪客留下深刻印象，或開發一個 AI 生成 UI 設計工具，讓設計流程更自動化且高效。"
                            id="toggle1"
                            imgSrc="real-image.jpg"
                        />
            
                        <FoldableCard 
                            title="提供想法"
                            content="在設計專案時，別只是執行，更要主動提供解決方案，如建議使用 AB 測試來優化 UI，分析競品 UX 並提出改進方向，或開發針對特定產業的設計系統，提高設計決策的價值。"
                            id="toggle2"
                            imgSrc="real-image.jpg"
                        />
            
                        <FoldableCard 
                            title="以質勝量"
                            content="與其做十個普通的設計，不如專注於一個高品質的作品，確保每個專案都有明確的設計目標、用戶數據支持，以及可驗證的成效，讓你的作品不只是好看，而是真正提升使用者體驗與商業價值。"
                            id="toggle3"
                            imgSrc="real-image.jpg"
                        />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section class="section section--services">
                <div class="verticalText-container">
                    <h1 class="vertical-text">Services</h1>
                </div>

                <div class="container">
                    <div class="section--services__content">
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
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section class="section section--portfolio" id="portfolio">
                <div class="verticalText-container">
                    <h1 class="vertical-text">Protfolio</h1>
                </div>

                <div class="container">

                    <div class="section--portfolio__content">
                        <div class="portfolio__tags">
                            <div class="tag tag--outLine tag--outLine--black">WEBSITE DESIGN</div>
                            <div class="tag tag--outLine tag--outLine--black">GRAPHIC DESIGN</div>
                            <div class="tag tag--outLine tag--outLine--black">MOTION GRAPHIC</div>
                            <div class="tag tag--outLine tag--outLine--black">3D MODEL</div>
                        </div>
                        
                        <Card_protfolio 
                            cardHeader="作品集名稱"
                            cardContent="作品集內容"
                        />

                        <Card_protfolio 
                            cardHeader="作品集名稱"
                            cardContent="作品集內容"
                        />

                        <Card_protfolio 
                            cardHeader="作品集名稱"
                            cardContent="作品集內容"
                        />

                        <Button kind='outLine-secondary' onClick={() => navigate("/portfolio")}>看更多</Button>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section class="section section--contact" id="contact">
                <div class="verticalText-container">
                    <h1 class="vertical-text vertical-text--white">Contact</h1>
                </div>


                <div class="container">
                    <div class="section--contact__content">
                        <form class="section--contact__form">
                            <h6 class="section--contact__header">請填上這些資訊，聯絡我們</h6>
                            <div>
                                <label class="section--contact__label" for="input-name">姓名</label>
                                <input class="input input--outLine input--outLine--white" type="text" id="input-name"></input>
                            </div>

                            <div>
                                <label class="section--contact__label" for="input-gmail">電子郵件</label>
                                <input class="input input--outLine input--outLine--white" type="text" id="input-gmail"></input>
                            </div>

                            <div>
                                <label class="section--contact__label" for="input-company">公司名稱</label>
                                <input class="input input--outLine input--outLine--white" type="text" id="input-company"></input>
                            </div>

                            <div>
                                <label class="section--contact__label" for="input-class">需求項目</label>
                                <input class="input input--outLine input--outLine--white" type="text" id="input-class"></input>
                            </div>

                            <div>
                                <label class="section--contact__label" for="input-money">預算</label>
                                <input class="input input--outLine input--outLine--white" type="text" id="input-money"></input>
                            </div>

                            <div>
                                <Button kind='primary'>送出</Button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;