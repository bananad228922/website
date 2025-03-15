function Portfolio_erratic() {
    return (
        <div className="container">
            <div className="portfolio-item__content">
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

                
                <img className='img-cover' src='https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png' />

                <div className='portfolio-item__textBlock'>
                    <h1>飄忽不定工作室</h1>
                    <p>ERRATIC STUDIO專注於品牌視覺設計的創意工作室，我們拒絕墨守成規，擁抱不確定性，並相信設計的價值來自於「突破框架」。我們的風格不拘一格，介於秩序與混亂之間，讓每一個品牌都擁有專屬的個性與靈魂。

                    我們相信：
                    - 靈感是流動的，設計應該不受限
                    - 打破規則，才能創造真正有記憶點的品牌
                    - 每一次錯誤，都是邁向新創意的契機
                    </p>
                </div>

                <img className='img-cover' src='https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032931/%E9%A3%84%E5%BF%BD%E4%B8%8D%E5%AE%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4Logo%E5%8B%95%E7%95%AB_1_1_fogkda.gif' />
                <img className='img-cover' src='https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032928/%E9%A3%84%E5%BF%BD%E4%B8%8D%E5%AE%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4Logo%E5%8B%95%E7%95%AB_t2ayzm.gif' />
                <img className='img-cover' src='https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032959/banner_px3cvk.png' />
                <img className='img-cover' src='https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032927/%E5%90%84%E7%A8%AE%E9%A1%8F%E8%89%B2_qqw9hx.png' />

                <div className='portfolio-item__textBlock'>
                    <h1>明信片設計</h1>
                </div>

                <img className='img-cover' src='https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032932/Postcard_Mockup_fuslx2.png' />
                <img className='img-cover' src='https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Postcard_Mockup_2_m8jxgn.png' />
            </div>
        </div>
    )

}

export default Portfolio_erratic;