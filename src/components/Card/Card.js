import './Card.scss';

const Card = ({ card }) => {
    return (
        <div className="card-item">
            {card.image && <img src={card.image} alt={card.title} 
            onMouseDown={event => event.preventDefault()}
            />}
            <span>{card.title}</span>
        </div>
    );
};

export default Card;
