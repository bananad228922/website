import '../styles/styles.css'
import Card_protfolio from '../components/card/Card-portfolio';

function Portfolio() {
    return (
        <section class="section section--portfolio" id="portfolio">

            <div class="container">
                <div class="portfolio__content">
                    <h1 class="portfolio__header">歡迎大家來觀看我的作品集！</h1>

                    <div class="portfolio__tags">
                        <div class="tag tag--outLine tag--outLine--black">WEBSITE DESIGN</div>
                        <div class="tag tag--outLine tag--outLine--black">GRAPHIC DESIGN</div>
                        <div class="tag tag--outLine tag--outLine--black">MOTION GRAPHIC</div>
                        <div class="tag tag--outLine tag--outLine--black">3D MODEL</div>
                    </div>
                    
                    <Card_protfolio
                        cardHeader="作品集名稱"
                        cardContent="作品集內容介紹："                    
                    />
                    
                    <Card_protfolio
                        cardHeader="作品集名稱"
                        cardContent="作品集內容介紹："                    
                    />

                    <Card_protfolio
                        cardHeader="作品集名稱"
                        cardContent="作品集內容介紹："                    
                    />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;