import "./Column.scss";
import Card from "../Card/Card";
import { Container, Draggable } from "react-smooth-dnd";

const Column = ({ column, onCardDrop }) => {
    return (
        <div className="column">
            <header className="column-drag-handle">{column.title}</header>
            <div className="card-list">
            <Container
                groupName="shared-cards" // Grupo compartilhado
                onDrop={(dropResult) => onCardDrop(dropResult, column.id)} // Passando o ID da coluna
                getChildPayload={(index) => ({ 
                    card: column.cards[index], 
                    sourceColumnId: column.id 
                })} // Incluindo dados do card e da coluna
                dragClass="card-ghost"
                dropClass="card-ghost-drop"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: "card-drop-preview",
                }}
                dropPlaceholderAnimationDuration={200}
                >
                    {column.cards.map((card) => (
                        <Draggable key={card.id}>
                            <Card card={card} />
                        </Draggable>
                    ))}
                </Container>
            </div>
            <footer className="footer-action">
                <button className="btn">
                    <i className="fas fa-plus"></i> Add outro Card
                </button>
            </footer>
        </div>
    );
};

export default Column;
