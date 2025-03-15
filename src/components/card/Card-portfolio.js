import { image } from "framer-motion/client";
import { Link } from "react-router-dom";

function Card_protfolio({cardHeader, cardContent, link, bgImage}) {
    return (
        <Link class="card--portfolio" to={link}>
            <div 
                className="card--portfolio__BG"
                style={{backgroundImage:`url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: "center"}}
            >
                <div className="card--portfolio__overlap"></div>
                <div class="card--portfolio__content">
                    <h5 class="heading-3 heading-3--white">
                        {cardHeader}
                    </h5>
                    
                    <p class="paragraph-m paragraph-m--white">
                        {cardContent}
                    </p>

                    <p className="paragraph-m paragraph-m--white">
                        點擊看完整專案 →
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default Card_protfolio;