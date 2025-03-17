function FoldableCard({title, content, id, imgSrc}) {
    return (
        <div  class="card--about">
            <input type="checkbox" id={id} class="card--about__accordion-toggle" />
            
            <div>
                <div class="card--about__header-wrapper">
                    <img src="/icon-add.svg" class="icon-l" />
                    <label for={id} class="heading-1">
                        {title}
                        </label>
                </div>

                <p class="card--about__content heading-3">
                    {content}
                </p>
            </div>

            <img class="card--about__img" src={imgSrc} loading="lazy" />
        </div>
    );
}

export default FoldableCard;

