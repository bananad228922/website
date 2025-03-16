import Tab from "./tab";
import Card_protfolio from "../card/Card-portfolio";

const handCalender = <Card_protfolio 
    cardHeader="日曆設計｜手的形式原理"
    cardContent="使用「手」，並藉由美的形式原理所打造而成的雙日曆設計"
    link="/portfolio_handCalender"
    bgImage="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png"
/>

const erratic = <Card_protfolio 
    cardHeader="品牌識別設計｜飄忽不定工作室"
    cardContent="飄忽不定工作室，是一間主打「資源至上主義、內容變現和質大於量」的設計工作室，我們為他製作了一系列的設計系統、形象短片以及網站設計"
    link="/portfolio_erratic"
    bgImage="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png"
/>

const weirdcore = <Card_protfolio 
    cardHeader="印刷刊物設計｜怪核"
    cardContent="怪核，是由純粹的空間所營造出來的恐懼、寂靜，這本書將會為你介紹何謂怪核，以及怪核的起源"
    link="/portfolio_weirdcore"
    bgImage="https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032515/Free_Book_Mockup_8_jy7wbm.png"
/>


const portfolio_alltag = [handCalender, erratic, weirdcore]
const portfolios_webDesign = [handCalender]
const portfolios_graphicDesign = [erratic]
const portfolios_motionGraphic = [weirdcore]
const portfolios_3DModel = [erratic, weirdcore]



function Tab_portfolio() {
    return (
        <Tab tabList={
            [{label: 'all tag', content: portfolio_alltag, labelKind: "no-style", labelSize: "medium"},
            {label: 'web design', content: portfolios_webDesign,  labelKind: "outLine-secondary", labelSize: "medium"},
            {label: 'graphic design', content: portfolios_graphicDesign, labelKind: "outLine-secondary", labelSize: "medium"},
            {label: 'motion graphic', content: portfolios_motionGraphic, labelKind: "outLine-secondary", labelSize: "medium"},
            {label: '3d model', content: portfolios_3DModel, labelKind: "outLine-secondary", labelSize: "medium"}]
        }/>
    )
}

export default Tab_portfolio;
