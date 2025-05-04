import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import styles from './tab.module.css';
import classNames from "classnames";

// 傳入的是一個物件列表
export default function Tab({label: labels, children, kind="primary", size="medium"}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.tabs}>
            <div className={styles.labels}>
                {labels.map((label, index) => (
                    <button
                        className={classNames(
                            styles.label,
                            styles[kind],
                            styles[size],
                            activeIndex === index && 'active',
                        )}
                        key={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        {label}
                        {console.log(index, "label建立完成")}
                    </button>
                ))}
            </div>

            <div className={styles.content}>
                {children[activeIndex]}
            </div>
        </div>
    )
}