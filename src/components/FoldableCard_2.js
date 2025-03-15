import Button from "./button/Button";

function FoldableCard_2({title, title_EN, content_1, content_2, content_3, content_4, content_5, id, imgScr}) {
    return (
        <div class="card--services">
            <input type="checkbox" id={id} class="card--services__accordion-toggle" />

            <div class="card--services__content">
                {/* header */}
                <div class="flex-row align-item-center gap-s">
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

                {/* list */}
                <ul className="card--services__list">
                    <li>
                    {content_1}
                    </li>

                    <li>
                    {content_2}
                    </li>

                    <li>
                    {content_3}
                    </li>

                    <li>
                    {content_4}
                    </li>

                    <li>
                    {content_5}
                    </li>
                </ul>

                {/* button */}
                <Button
                    kind="outLine-secondary"
                    extraClass="card--services__btn"
                >
                        contact me
                </Button>
            </div>

            <img class="card--services__img" src={imgScr} loading="lazy" />  
        </div>
    );
}

export default FoldableCard_2;