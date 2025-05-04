import { useEffect, useId, useRef } from "react";
import styles from "./cardCollapseBase.module.css";
import { useUpdateLenis } from "../../../hook/utils";
import '../../../styles/styles.css';
import { SubIcon, AddIcon } from "../../icon/icon";
import classNames from "classnames";


export default function CardCollapse({ title, children, darkmode=false }) {
    const id = useId();
    const cardRef = useRef(null);

    useUpdateLenis(cardRef);

    return (
        <div>
            <div className={styles.container} ref={cardRef}>
                <input
                    type="checkbox"
                    id={id}
                    className={styles.trigger}
                />

                <label
                    className={styles.header}
                    htmlFor={id}
                >
                    <div className={styles.iconWrapper}>
                        <div className={styles.iconAdd}>
                            <AddIcon darkmode={darkmode}/>
                        </div>

                        <div className={styles.iconSub}>
                            <SubIcon darkmode={darkmode}/>
                        </div>
                    </div>

                    <h1 className={classNames("heading-3", darkmode && styles.headingDarkmode)}>
                        {title}
                    </h1>
                </label>

                <div className={classNames(styles.content, darkmode && styles.contentDarkmode)}>
                    {children}
                </div>
            </div>

            <div className={darkmode ? "line--white" : "line--black"}></div>
        </div>
    );
}