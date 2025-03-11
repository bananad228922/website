function FoldableCard_2({title, title_EN, content_1, content_2, content_3, content_4, content_5, id, imgScr}) {
    return (
        <div class="card--services">
            <input type="checkbox" id={id} class="card--services__accordion-toggle" />

            <div class="card--services__content">
                {/* header */}
                <div class="flex-row align-item-center">
                    <img src="/icon-add-black.svg" class="icon-l" />

                    <label class="card--services__header-wrapper" for={id}>
                        <h3 class="card--services__header">
                            {title}
                        </h3>

                        <h4>
                            {title_EN}
                        </h4>
                    </label>
                </div>

                {/* param */}
                <p class="card--services__param">
                    {content_1}
                    <br />
                    {content_2}
                    <br />
                    {content_3}
                    <br />
                    {content_4}
                    <br />
                    {content_5}
                </p>

                {/* button */}
                <div class="button button--outLine button--outLine--black card--services__btn"></div>
            </div>

            <img class="card--services__img" src={imgScr} loading="lazy" />  
        </div>
    );
}

export default FoldableCard_2;