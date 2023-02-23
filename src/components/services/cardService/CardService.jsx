import "./cardService.css";

function CardService({ title, img }) {
    return (
        <div
            className="card-service"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="card-text">
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default CardService;
