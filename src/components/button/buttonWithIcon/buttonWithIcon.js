import styles from "./buttonWithIcon.module.css";
import classNames from "classnames";

export default function ButtonWithIcon({children, size="medium", outline=false, onClick}) {
    return (  
        <button className={classNames(styles.buttonWithIcon, styles[size], styles[outline && "outline"])} onClick={onClick}>
            <span className={classNames(styles.BG_, styles[outline && "outline"])}></span>
            <span className={classNames(styles.BG, styles[outline && "outline"])}></span>

            <div className={styles.wrapper}>
                <IconArror outline={outline}/>
                <span className={classNames(styles.label, styles[outline && "outline"])}>
                    {children}
                </span>
                <IconArror outline={outline}/>
            </div>

        </button>
    );
}


function IconArror({outline}) {
    return (
        <svg className={classNames(styles.icon, styles[outline && "outline"])} xmlns="http://www.w3.org/2000/svg" width="43.563" height="42.654" viewBox="0 0 43.563 42.654">
            <g id="Group_60" data-name="Group 60" transform="translate(-623.422 -2706.461)">
                <path id="Path_25" data-name="Path 25" d="M21392.023,2707.168l20.621,20.62-20.621,20.62" transform="translate(-20747.074)" fill="none" stroke="currentColor" stroke-width="2"/>
                <path id="Path_26" data-name="Path 26" d="M21238.6,2862.268h-42.146" transform="translate(-20573.031 -134.481)" fill="none" stroke="currentColor" stroke-width="2"/>
            </g>
        </svg>
    )
}

// icon...