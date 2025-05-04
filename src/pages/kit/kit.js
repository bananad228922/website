import {Button} from "../../components/button/button/button";
import Card_protfolio from "../../components/card/Card-portfolio";
import CardCollapse from "../../components/card/cardCollapse/cardCollapse";
import './ComponentKit.css'
import ButtonWithIcon from "../../components/button/buttonWithIcon/buttonWithIcon";
import IconButton from "../../components/button/iconButton/iconButton";

function ComponentKit() {
    return (
        <div>
            {/* hero */}
            <section className="kit--hero">
                <div className="container">
                    <div className="kit--hero__content">
                        <div className="navBar-spacer"></div>
                        <h1 className="display-1">這裡存放著我們的設計系統</h1>
                    </div>
                </div>

            </section>


            {/* button */}
            <section className="kit--button">
                <div className="container">
                    <div className="kit--button__content">
                        <h1 className="heading-1">button</h1>

                        <div className="line--white"></div>

                        {/* primary */}
                        <div className="flex-row between align-item-center">
                            <Button kind="primary">primary</Button>
                            <Button kind="outLine-primary">outLine-primary</Button>
                        </div>

                        {/* secondary */}
                        <div className="flex-row between align-item-center">
                            <Button kind="secondary">secondary</Button>
                            <Button kind="outLine-secondary">outLine-secondary</Button> 
                        </div>

                        <div className="flex-row between align-item-center">
                            <Button size="small">small</Button>
                            <Button size="medium">medium</Button>
                            <Button size="large">large</Button>
                        </div>
                    </div>

                    <div className="m-t-m m-l-l m-b-l" >
                        <ButtonWithIcon>label</ButtonWithIcon>
                    </div>

                    <div className="m-t-m m-l-l m-b-l">
                        <ButtonWithIcon outline={true}>label</ButtonWithIcon>
                    </div>

                    <div className="m-t-m m-l-l m-b-l">
                        <ButtonWithIcon>label</ButtonWithIcon>
                    </div>

                    <div className="m-t-m m-l-l m-b-l">
                        <ButtonWithIcon outline={true}>label</ButtonWithIcon>
                    </div>

                    <div className="m-t-m m-l-l m-b-l">
                        <IconButton />
                    </div>
                </div>
            </section>

            {/* tabs */}
            <section className="kit--tabs">
                <div className="container">
                    <div className="kit--tabs__content">
                        <h1 className="heading-2">tab</h1>

                        <div className="flex-row between align-item-center">
                            <button className="tabs__label tabs__label--primary tabs__label--medium">label</button>
                            <button className="tabs__label tabs__label--outLine-primary tabs__label--medium">label</button>
                            <button className="tabs__label tabs__label--ghost-primary tabs__label--medium">label</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="kit--tabs--green">
                <div className="container">
                    <div className="kit--tabs__content">
                        <div className="flex-row between align-item-center">
                            <button className="tabs__label tabs__label--secondary tabs__label--medium">label</button>
                            <button className="tabs__label tabs__label--outLine-secondary tabs__label--medium">label</button>
                            <button className="tabs__label tabs__label--ghost-secondary tabs__label--medium">label</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="kit--tabs">
                <div className="container">
                    <div className="kit--tabs__content">
                        <div className="flex-row between align-item-center">
                            <button className="tabs__label tabs__label--outLine-primary tabs__label--small">label</button>
                            <button className="tabs__label tabs__label--outLine-primary tabs__label--medium">label</button>
                            <button className="tabs__label tabs__label--outLine-primary tabs__label--large">label</button>
                        </div>
                    </div>
                </div>
            </section>



            {/* text */}
            <section className="kit--tabs">
                <div className="container">
                    <div className="kit--tabs__content">
                        <h1 className="heading-2">text</h1>

                        <h1 className="display-1">display 1</h1>
                        <h1 className="heading-1">heading 1</h1>
                        <h1 className="heading-2">heading 2</h1>
                        <h1 className="heading-3">heading 3</h1>
                        <p className="paragraph-m">paragraph</p>
                        <p className="paragraph-s">Caption</p>
                    </div>
                </div>
            </section>







            {/* card */}
            <section className="kit--tabs">
                <div className="container">
                    <div className="kit--tabs__content">
                        <h1 className="heading-2">card</h1>

                        <Card_protfolio/>
                        <CardCollapse
                            title="網站設計｜Web design"
                        >
                            <p>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                            </p>
                        </CardCollapse>  

                        <CardCollapse
                            title="網站設計｜Web design"
                        >
                            <p>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                            </p>
                        </CardCollapse>  

                        <CardCollapse
                            title="網站設計｜Web design"
                        >
                            <p>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                                This is a foldable card. <br/>
                            </p>
                        </CardCollapse>  
                    </div>
                </div>
            </section>

            {/* input */}
            <section className="kit--tabs">
                <div className="container">
                    <div className="kit--tabs__content">
                        <h1 className="heading-2">input</h1>
                    </div>
                </div>
            </section>







            <section className="kit--tabs">
                <div className="container">
                    <div className="kit--tabs__content">
                        
                    </div>
                </div>
            </section>

            <div className="bg-green flex-row align-item-center">
                <button className="tabs__label tabs__label--secondary tabs__label--medium">label</button>
                <button className="tabs__label tabs__label--outLine-secondary tabs__label--medium">label</button>
            </div>
        </div>

    );
}

export default ComponentKit;
