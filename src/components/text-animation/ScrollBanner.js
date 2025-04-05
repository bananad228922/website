import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./ScrollBanner.module.css";

export default function ScrollBanner({ children }) {
    return (
        <div className={styles["scroll-banner-wrapper"]}>
            <p className={styles["scroll-banner-content"]}>
                {children}
            </p>
        </div>
    )
}