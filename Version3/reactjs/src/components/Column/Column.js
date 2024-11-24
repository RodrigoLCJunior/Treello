/* import "./Column.scss";
import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { Container, Draggable } from "react-smooth-dnd";
import Dropdown from "react-bootstrap/Dropdown";
import ConfirmModal from "../Common/ConfirmModal";
import Form from "react-bootstrap/Form";
import { MODAL_ACTION_CONFIRM } from "../../utilities/constant";
import {v4 as uuidv4} from 'uuid';


const Column = ({ column, onCardDrop, onUpdateTitle, onUpdateColumn }) => {

    const [isShowModalDelete, setModalDelete] = useState(false);
    const [titleColumn, setTitleColumn] = useState(column.title); // Usando o título inicial da coluna
    const [isShowAddNewCard, setIsShowAddNewCard] = useState(false);
    const [valueTextArea, setValueTextArea] = useState("");
    const textAreaRef = useRef(null);

    useEffect(() => {
        if(isShowAddNewCard === true && textAreaRef && textAreaRef.current){
            textAreaRef.current.focus();
        }
    }, [isShowAddNewCard])

    useEffect(() => {
        // Atualiza o título da coluna no estado sempre que o título da coluna mudar
        setTitleColumn(column.title);
    }, [column.title]);

    const toggleModal = () => {
        setModalDelete(!isShowModalDelete);
    };

    const onModalAction = (type) => {
        if (type === MODAL_ACTION_CONFIRM) {
            // Aqui você pode adicionar a lógica de remoção de coluna, se necessário
            const newColumn = {
                ...column,
                title: titleColumn,
                _destroy: true
            }
            onUpdateColumn(newColumn);
        }
        toggleModal();
    };

    const selectAllText = (event) => {
        event.target.focus();
        event.target.select();
    };

    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setTitleColumn(newTitle);
        
        // Se você quiser propagar essa mudança para o componente pai:
        if (onUpdateTitle) {
            onUpdateTitle(newTitle, column.id); // A chamada de callback que pode ser definida no componente pai
        }
    };

    const handleClickOutside = () => {
        
    }

    const handleAddNewCard = () => {
        if (!valueTextArea) {
            textAreaRef.current.focus();
            return;
        }
    
        const newCard = {
            id: uuidv4(),
            boardId: column.boardId,
            columnId: column.id,
            title: valueTextArea,
            image: null,
        };
    
        // Garanta que cards seja um array antes de adicionar o novo cartão
        let newColumn = { ...column };
        newColumn.cards = Array.isArray(newColumn.cards) ? [...newColumn.cards, newCard] : [newCard];
        newColumn.cardOrder = newColumn.cards.map((card) => card.id);
    
        onUpdateColumn(newColumn);
        setValueTextArea("");
        setIsShowAddNewCard(false);
    };
    

    return (
        <>
            <div className="column">
                <header className="column-drag-handle">
                    <div className="column-title">
                        {}
                        <Form.Control
                            size={"sm"}
                            type="text"
                            value={titleColumn}
                            className="customize-input-column"
                            onClick={selectAllText}
                            onChange={handleTitleChange}
                            spellCheck="false"
                            onBlur={handleClickOutside}
                        />
                    </div>
                    <div className="column-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant='success' id='dropdown-basic' size='sm'></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href='#'>Add Cartão</Dropdown.Item>
                                <Dropdown.Item onClick={toggleModal}>Remover Coluna</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </header>
                <div className="card-list">
                    <Container
                        groupName="shared-cards"
                        onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
                        getChildPayload={(index) => ({
                            card: column.cards[index],
                            sourceColumnId: column.id
                        })}
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
                {isShowAddNewCard === true &&
                    <div className="add-new-card">
                        <textarea 
                            rows="2" 
                            className="form-control"
                            placeholder="Escolha um Titulo para o Cartão..."
                            ref={textAreaRef}
                            value={valueTextArea}
                            onChange={(event) => setValueTextArea(event.target.value)}>
                        </textarea>
                        <div className="group-btn">
                            <button className="btn btn-primary"
                                    onClick={() => handleAddNewCard()}> Add Card
                            </button>
                            <i className="fa fa-times icon"
                               onClick={() => setIsShowAddNewCard(false)}></i>
                        </div>
                    </div>
                    }
                </div>
                {isShowAddNewCard === false &&
                    <footer className="footer-action">
                            <i className="fas fa-times icon"
                                onClick={() => setIsShowAddNewCard(true)}>Add outro Card</i> 
                    </footer>
                }
            </div>

            <ConfirmModal
                show={isShowModalDelete}
                title={"Remover a coluna"}
                content={`Quer remover mesmo esta coluna: <b>${column.title}</b>?`}
                onAction={onModalAction}
            />
        </>
    );
};

export default Column;*/

import "./Column.scss";
import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { Container, Draggable } from "react-smooth-dnd";
import Dropdown from "react-bootstrap/Dropdown";
import ConfirmModal from "../Common/ConfirmModal";
import Form from "react-bootstrap/Form";
import { MODAL_ACTION_CONFIRM } from "../../utilities/constant";
import { v4 as uuidv4 } from "uuid";

const Column = ({ column, onCardDrop: onCardDropProp, onUpdateTitle, onUpdateColumn }) => {
    const [isShowModalDelete, setModalDelete] = useState(false);
    const [titleColumn, setTitleColumn] = useState(column?.title || ""); // Verifica se o título existe
    const [isShowAddNewCard, setIsShowAddNewCard] = useState(false);
    const [valueTextArea, setValueTextArea] = useState("");
    const textAreaRef = useRef(null);

    useEffect(() => {
        if (isShowAddNewCard && textAreaRef?.current) {
            textAreaRef.current.focus();
        }
    }, [isShowAddNewCard]);

    useEffect(() => {
        // Atualiza o título da coluna no estado sempre que o título da coluna mudar
        setTitleColumn(column?.title || "");
    }, [column?.title]);

    const toggleModal = () => {
        setModalDelete(!isShowModalDelete);
    };

    const onModalAction = (type) => {
        if (type === MODAL_ACTION_CONFIRM) {
            const newColumn = {
                ...column,
                title: titleColumn,
                _destroy: true,
            };
            onUpdateColumn(newColumn);
        }
        toggleModal();
    };

    const selectAllText = (event) => {
        event.target.focus();
        event.target.select();
    };

    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setTitleColumn(newTitle);

        // Propaga a mudança para o componente pai
        if (onUpdateTitle) {
            onUpdateTitle(newTitle, column?.id);
        }
    };

    const handleAddNewCard = async () => {
        if (!valueTextArea.trim()) {
            if (textAreaRef.current) textAreaRef.current.focus();
            return;
        }
    
        const newCard = {
            id: uuidv4(),
            boardId: column?.boardId || "",
            columnId: column?.id || "",
            title: valueTextArea,
            image: null,
        };
    
        // Chamar a API para salvar o card no backend
        try {
            const response = await createCard(column.id, newCard); // Envia os dados para o backend
            const savedCard = response; // Supondo que a API retorne o card criado
            const newColumn = {
                ...column,
                cards: [...column.cards, savedCard], // Adiciona o card salvo à coluna
                cardOrder: [...(column.cardOrder || []), savedCard.id],
            };
            onUpdateColumn(newColumn); // Atualiza a coluna no frontend
            setValueTextArea(""); // Limpa o campo de entrada
            setIsShowAddNewCard(false); // Fecha o formulário de adição
        } catch (error) {
            console.error('Erro ao adicionar o card:', error);
        }
    };    

    const handleCardDrop = async (dropResult) => {
        const { removedIndex, addedIndex, payload } = dropResult;
        
        const destinationColumnId = payload.columnId;
        
        if (!destinationColumnId) {
            console.error("ID da coluna de destino não encontrado.");
            return;
        }
    
        try {
            // Atualiza o card no backend
            await moveCard(payload.id, destinationColumnId);
        } catch (error) {
            console.error("Erro ao mover o card no backend:", error);
            return;
        }
    
        // Atualiza o estado local da coluna (frontend)
        const updatedCard = {
            ...payload,
            columnId: destinationColumnId,  // Atualiza o ID da coluna no card
        };
    
        // Atualiza as colunas no estado (frontend)
        const newSourceColumn = {
            ...sourceColumn,
            cards: sourceColumn.cards.filter((_, index) => index !== removedIndex),
        };
    
        const newDestinationColumn = {
            ...destinationColumn,
            cards: [
                ...destinationColumn.cards.slice(0, addedIndex),
                updatedCard,
                ...destinationColumn.cards.slice(addedIndex),
            ],
        };
    
        onUpdateColumn(newSourceColumn); // Atualiza a coluna de origem
        onUpdateColumn(newDestinationColumn); // Atualiza a coluna de destino
    };
    
    return (
        <>
            <div className="column">
                <header className="column-drag-handle">
                    <div className="column-title">
                        <Form.Control
                            size="sm"
                            type="text"
                            value={titleColumn}
                            className="customize-input-column"
                            onClick={selectAllText}
                            onChange={handleTitleChange}
                            spellCheck="false"
                        />
                    </div>
                    <div className="column-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm"></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setIsShowAddNewCard(true)}>Adicionar Cartão</Dropdown.Item>
                                <Dropdown.Item onClick={toggleModal}>Remover Coluna</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </header>
                <div className="card-list">
                    <Container
                        groupName="shared-cards"
                        onDrop={(dropResult) => handleCardDrop(dropResult)}
                        getChildPayload={(index) => ({
                            card: column?.cards[index],
                            sourceColumnId: column?.id,
                        })}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"
                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: "card-drop-preview",
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >
                        {(column?.cards || []).map((card) => (
                            <Draggable key={card.id}>
                                <Card card={card} />
                            </Draggable>
                        ))}
                    </Container>
                    {isShowAddNewCard && (
                        <div className="add-new-card">
                            <textarea
                                rows="2"
                                className="form-control"
                                placeholder="Escolha um Título para o Cartão..."
                                ref={textAreaRef}
                                value={valueTextArea}
                                onChange={(event) => setValueTextArea(event.target.value)}
                            ></textarea>
                            <div className="group-btn">
                                <button className="btn btn-primary" onClick={handleAddNewCard}>
                                    Adicionar Cartão
                                </button>
                                <i className="fa fa-times icon" onClick={() => setIsShowAddNewCard(false)}></i>
                            </div>
                        </div>
                    )}
                </div>
                {!isShowAddNewCard && (
                    <footer className="footer-action">
                        <i className="fas fa-plus icon" onClick={() => setIsShowAddNewCard(true)}></i>
                        Adicionar outro Cartão
                    </footer>
                )}
            </div>

            <ConfirmModal
                show={isShowModalDelete}
                title="Remover a coluna"
                content={`Quer remover mesmo esta coluna: <b>${column?.title || ""}</b>?`}
                onAction={onModalAction}
            />
        </>
    );
};

export default Column;
