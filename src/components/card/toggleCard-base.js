import AddIcon from "../icon/icon-add";
import SubIcon from "../icon/icon-sub";

function ToggleCard({ title, content, id }) {
    return (
        <div className="card--base">
            <input type="checkbox" id={id} className="card--base__toggle" />

            <label className="card--base__header" htmlFor={id}>
                <div style={{position: 'relative', alignItems: 'center', justifyContent: 'center', height: '50px', width: '50px'}}>
                    <div className='card--base__icon-add'>
                        <AddIcon />
                    </div>

                    <div className='card--base__icon-sub'>
                        <SubIcon />
                    </div>
                </div>

                <h1 className="heading-1">
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