import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'

// 傳入的是一個物件列表
function Tab({tabList}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="tabs">
            <div className="tabs__labels">
                {tabList.map((object, index) => (
                    <button
                        className={`tabs__label tabs__label--${object.labelKind === undefined ? "primary" : object.labelKind} tabs__label--${object.labelSize === undefined ? "medium" : object.labelSize} ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        {object.label}
                    </button>
                ))}                
            </div>

            <div className="tabs__content">
                {tabList[activeIndex].content}

            </div>
        </div>
    )
}

export default Tab;


{/* <AnimatePresence mode="wait">
<motion.div
    key={activeIndex}
    initial={{opacity: 0, y: 10}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: -10}}
    transition={{duration: 0.2}}
>
    {tabList[activeIndex].content}
</motion.div>
</AnimatePresence> */}