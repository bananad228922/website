import '../styles/styles.css'
import Card_protfolio from '../components/card/Card-portfolio';
import Tab_portfolio from '../components/tab/tab-portfolio';

function Portfolio() {
    return (
        <section class="section section--portfolio" id="portfolio">

            <div class="container">
                <div class="portfolio__content">
                    <h1 class="portfolio__header">歡迎大家來觀看我的作品集！</h1>

                    <Tab_portfolio />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;