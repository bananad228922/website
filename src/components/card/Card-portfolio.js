function Card_protfolio({cardHeader, cardContent}) {
    return (
        <div  class="card--portfolio">
            <div class="card--portfolio__BG">
                <div class="card--portfolio__content">
                    <h5 class="heading-2 heading-2--white">
                        {cardHeader}
                    </h5>
                    
                    <p class="param-m--white">
                        {cardContent}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card_protfolio;