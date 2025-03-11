import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // 只觸發一次
        threshold: 0.2, // 當元素 20% 進入視野時觸發
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}  // 初始狀態
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // 滾動到時執行動畫
            transition={{ duration: 0.8, ease: "easeOut" }} // 動畫時間
            style={{ width: "100%" }} // ✅ 讓 motion.div 繼承祖父元素的寬度
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;