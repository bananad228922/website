import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import './testLocoScroll_.js'

export default function TestLocoScroll() {
    const scrollContainer = useRef(null);

    useEffect(() => {
        if (!scrollContainer.current) return;

        // ✅ 初始化 Locomotive Scroll
        const locoScroll = window.locoScroll;
        if (!locoScroll) return;

        locoScroll.update();

        // ✅ 監聽滾動事件
        locoScroll.on("scroll", (args) => {
            console.log("滾動位置 (y):", args.scroll.y);
        });

        return () => locoScroll.destroy();
    }, []);

    return (
        <div ref={scrollContainer} data-scroll-container style={{ height: "200vh", padding: "20px" }}>
            <h1 data-scroll-section>滾動測試區</h1>
            <p style={{ marginTop: "100vh" }}>繼續滾動看看 `scroll.y` 是否變化</p>
        </div>
    );
}