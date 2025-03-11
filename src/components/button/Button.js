const Button = ({
    children, 
    size = "medium",
    kind = "primary",
    extraClass,
    onClick,
}) => {
    const btnClass = `button button--${kind} button--${size} ${extraClass}`;
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;