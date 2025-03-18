import Tab from "../components/tab/tab";
import Card_protfolio from "../components/card/Card-portfolio";
import AddIcon from "../components/icon/icon-add";
import MotionButtonTest from "../components/button/motionButtonTest";
import ButtonWithIcon from "../components/button/buttonWithIcon";
import IconButton from "../components/button/IconButton";
import ThreeScene from "../components/ThreeScene";
import SmoothScroll from "../components/smoothScroll";
import Parallax from "../components/parallax";


// locomotive
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";



function TestUse() {

    useEffect(() => {
        const locoScroll = new LocomotiveScroll({el: document.querySelector("[data-scroll-container]"), smooth: true, multiplier: 1.2});

        setTimeout(() => {
            locoScroll.update();
        }, 500)

        return (() => {
            locoScroll.destroy();
        })
    }, [])

    return (
        <div data-scroll-container>
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

            <div data-scroll data-scroll-speed="1" style={{ height: "20vh", width: "100vw", backgroundColor: "red" }}></div>
            <div data-scroll data-scroll-speed="2" style={{ height: "20vh", width: "100vw", backgroundColor: "blue" }}></div>
            <div data-scroll data-scroll-speed="3" style={{ height: "20vh", width: "100vw", backgroundColor: "red" }}></div>
            <div data-scroll data-scroll-speed="-1" style={{ height: "20vh", width: "100vw", backgroundColor: "blue" }}></div>
            <div data-scroll data-scroll-speed="-2" style={{ height: "20vh", width: "100vw", backgroundColor: "red" }}></div>
            <div data-scroll data-scroll-speed="-3" style={{ height: "20vh", width: "100vw", backgroundColor: "blue" }}></div>
            <div data-scroll data-scroll-speed="4" style={{ height: "20vh", width: "100vw", backgroundColor: "red" }}></div>
            <div data-scroll data-scroll-speed="-4" style={{ height: "20vh", width: "100vw", backgroundColor: "blue" }}></div>
            <div data-scroll data-scroll-speed="5" style={{ height: "20vh", width: "100vw", backgroundColor: "red" }}></div>
            <div data-scroll data-scroll-speed="-5" style={{ height: "20vh", width: "100vw", backgroundColor: "blue" }}></div>

        </div>
    )
}

export default TestUse;