import style from './icon-add.module.css';

function AddIcon() {
    return (
        <div className={style.wrapper}>
            <div className={style['line-vertical']}></div>
            <div className={style['line-horizon']}></div>
        </div>
    )
}

export default AddIcon;