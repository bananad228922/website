import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (!scrollContainer.current) return; // ✅ 確保 scrollContainer 存在再執行

    const locoScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      lerp: 0.1, // 控制滾動過渡（數值越小越慢）
      multiplier: 1, // 控制滾動速度
    });

    setTimeout(() => {
        locoScroll.update();
    }, 500);

    return () => {
      if (locoScroll) locoScroll.destroy(); // 清除滾動事件，防止記憶體洩漏
    };
  }, []);

  return (
    <div ref={scrollContainer} data-scroll-container>
      {children}
    </div>
  );
}