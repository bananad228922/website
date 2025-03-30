import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";


export default function UseCreateLocoScroll() {
    window.scrollContainer = useRef(null);

    if (window.scrollContainer.current !== null) {
        window.locoScroll = new LocomotiveScroll({
            el: window.scrollContainer.current,
            smooth: true,
        });
    }


}