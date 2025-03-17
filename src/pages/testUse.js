import Tab from "../components/tab/tab";
import Card_protfolio from "../components/card/Card-portfolio";
import AddIcon from "../components/icon/icon-add";
import MotionButtonTest from "../components/button/motionButtonTest";
import ButtonWithIcon from "../components/button/buttonWithIcon";
import IconButton from "../components/button/IconButton";

function TestUse() {
    return (
        <div>
            <div className="navBar-spacer"></div>

            <AddIcon />

            <div className="mt-m ml-l mb-l">
                <MotionButtonTest>label</MotionButtonTest>
            </div>

            <div className="mt-m ml-l mb-l">
                <MotionButtonTest outline={true}>label</MotionButtonTest>
            </div>

            <div className="mt-m ml-l mb-l">
                <ButtonWithIcon>label</ButtonWithIcon>
            </div>

            <div className="mt-m ml-l mb-l">
                <ButtonWithIcon outline={true}>label</ButtonWithIcon>
            </div>

            <div className="mt-m ml-l mb-l">
                <IconButton />
            </div>
        </div>
    )
}

export default TestUse;