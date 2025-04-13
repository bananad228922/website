import "locomotive-scroll/dist/locomotive-scroll.css";
import {HorizontalScrollingContainer, HorizontalScrollingCard} from "../components/card/HorizontalScrollingCard/HorizontalScrollingCard.js";
import SmoothScroll from "../components/smoothScroll";
import ChildA from "../test/testReactRenderOrder.js";

export default function TestUse() {
    return (
        <SmoothScroll>
            <div style={{height: '50vh'}}></div>
            <HorizontalScrollingContainer>
                {card1}
                {card2}
                {card3}
                {card1}
                {card2}
                {card3}
                {card1}
                {card2}
                {card3}
            </HorizontalScrollingContainer>
            <div style={{height: '50vh'}}></div>
        </SmoothScroll>
    );
}

const card1 = <HorizontalScrollingCard src="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png"/>;
const card2 = <HorizontalScrollingCard src="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png"/>;
const card3 = <HorizontalScrollingCard src="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032515/Free_Book_Mockup_8_jy7wbm.png"/>;

const cardList = [card1, card2, card3];





