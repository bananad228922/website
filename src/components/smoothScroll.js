import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (!scrollContainer.current) return; // ✅ 確保 scrollContainer 存在

    // ✅ 初始化 LocomotiveScroll
    window.locoScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
    });

    // ✅ 確保所有 data-scroll 元素都被偵測到
    const updateTimeout = setTimeout(() => {
      if (window.locoScroll) {
        console.log("🔄 LocomotiveScroll 更新");
        window.locoScroll.update();
      }
    }, 500);

    return () => {
      clearTimeout(updateTimeout);
      if (window.locoScroll) {
        window.locoScroll.destroy();
        console.log("🗑️ LocomotiveScroll 已清除");
      }
    };
  }, []);

  return (
    <div ref={scrollContainer} data-scroll-container>
      {children}
    </div>
  );
}