function ToggleCard({ title, content, id }) {
    return (
        <div className="card--base">
            <input type="checkbox" id={id} className="card--base__toggle" />

            <label className="card--base__header" htmlFor={id}>
                <img src="/icon-add.svg" className="icon-l" alt="toggle icon" />
                <h1 className="heading-2">
                    {title}
                </h1>
            </label>

            <p className="card--base__content">
                {content}
            </p>
        </div>
    );
}

export default ToggleCard;