import style from "./motionButtonTest.module.css";
import classNames from "classnames";

function ButtonWithIcon({children, outline=false}) {
    return (  
        <button className={classNames(style['button-with-icon'], style['button--medium'])}>
            <span className={style[`button-with-icon__label${outline === true ? '--outline' : ''}`]}>{children}</span>
            <svg className={style[`button-with-icon__icon-pointer${outline === true ? '--outline' : ''}`]} xmlns="http://www.w3.org/2000/svg" width="43.563" height="42.654" viewBox="0 0 43.563 42.654">
                <g id="Group_60" data-name="Group 60" transform="translate(-623.422 -2706.461)">
                    <path id="Path_25" data-name="Path 25" d="M21392.023,2707.168l20.621,20.62-20.621,20.62" transform="translate(-20747.074)" fill="none" stroke="currentColor" stroke-width="2"/>
                    <path id="Path_26" data-name="Path 26" d="M21238.6,2862.268h-42.146" transform="translate(-20573.031 -134.481)" fill="none" stroke="currentColor" stroke-width="2"/>
                </g>
            </svg>

            <span className={style[`button-with-icon__BG${outline === true ? '--outline' : ''}`]}></span>
            <span className={style['button-with-icon__border']}></span>

        </button>
    );
}

export default ButtonWithIcon;