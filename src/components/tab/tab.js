import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'

// 傳入的是一個物件列表
function Tab({tabList, labelStyle='primary'}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div className="tabs__labels">
                {tabList.map((object, index) => (
                    <button
                        className={`tabs__label tabs__label--${labelStyle} ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        {object.label}
                    </button>
                ))}                
            </div>

            <div className="tabs__content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.2}}
                    >
                        {tabList[activeIndex].content}
                    </motion.div>
                </AnimatePresence>

            </div>
        </div>
    )
}

export default Tab;