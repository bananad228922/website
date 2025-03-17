import style from "./motionButtonTest.module.css";
import classNames from "classnames";

function MotionButtonTest({children, outline=false}) {
    return (  
        <button className={classNames(style.button, style['button--medium'])}>
            <span className={style[`label${outline === true ? '--outline' : ''}`]}>{children}</span>
            <span className={style[`BG${outline === true ? '--outline' : ''}`]}></span>
            <span className={style.border}></span>
            
        </button>
    );
}

export default MotionButtonTest;