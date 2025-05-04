import styles from "./iconButton.module.css";
import classNames from "classnames";

function IconButton({size="medium"}) {
    return (  
        <button className={classNames(styles.iconButton, styles[size])}>
            <Icon/>
            <Icon/>
        </button>
    );
}

function Icon() {
    return (
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="43.563" height="42.654" viewBox="0 0 43.563 42.654">
            <g id="Group_60" data-name="Group 60" transform="translate(-623.422 -2706.461)">
                <path id="Path_25" data-name="Path 25" d="M21392.023,2707.168l20.621,20.62-20.621,20.62" transform="translate(-20747.074)" fill="none" stroke="currentColor" stroke-width="2"/>
                <path id="Path_26" data-name="Path 26" d="M21238.6,2862.268h-42.146" transform="translate(-20573.031 -134.481)" fill="none" stroke="currentColor" stroke-width="2"/>
            </g>
        </svg>
    )
}

export default IconButton;