import "./BoardContent.scss";
import Column from "../Column/Column";
import { initData } from "../../actions/initData";
import { useState, useEffect } from "react";
import _ from "lodash";
import { mapOrder } from "../../utilities/sorts";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../../utilities/dragDrop";

const BoardContent = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState({});

    useEffect(() => {
        const boardInitData = initData.boards.find(
            (item) => item.id === "board-1"
        );
        if (boardInitData) {
            setBoard(boardInitData);
            setColumns(
                mapOrder(boardInitData.columns, boardInitData.columnOrder, "id")
            );
        }
    }, []);

    const onColumnDrop = (dropResult) => {
        console.log(">>> inside onColumnDrop", dropResult);
        let newColumns = [...columns];
        newColumns = applyDrag(newColumns, dropResult);

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map((column) => column.id);
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);
    };

    const onCardDrop = (dropResult, columnId) => {
        if (dropResult.removedIndex === null && dropResult.addedIndex === null) {
            return; // Nada mudou
        }
    
        const { payload } = dropResult;
        if (!payload || !payload.card || !payload.sourceColumnId) {
            console.error("Payload inválido:", payload);
            return;
        }
    
        let newColumns = [...columns];
    
        // Atualizar a coluna de origem (remover o card da coluna de origem)
        let sourceColumn = newColumns.find((column) => column.id === payload.sourceColumnId);
        if (sourceColumn) {
            // Remover o card da coluna de origem
            sourceColumn.cards = sourceColumn.cards.filter((card) => card.id !== payload.card.id);
            sourceColumn.cardOrder = sourceColumn.cards.map((card) => card.id);
        } else {
            console.error("Coluna de origem não encontrada:", payload.sourceColumnId);
        }
    
        // Atualizar a coluna de destino (adicionar o card à nova coluna)
        if (dropResult.addedIndex !== null) {
            let targetColumn = newColumns.find((column) => column.id === columnId);
            if (targetColumn) {
                // Adicionar o card à coluna de destino
                targetColumn.cards.splice(dropResult.addedIndex, 0, payload.card);
                targetColumn.cardOrder = targetColumn.cards.map((card) => card.id);
            } else {
                console.error("Coluna de destino não encontrada:", columnId);
            }
        }
    
        // Agora, se você precisar garantir que a ordem dos cards esteja correta após a movimentação, você pode usar mapOrder
        newColumns.forEach((column) => {
            column.cards = mapOrder(column.cards, column.cardOrder, 'id');
        });
    
        // Atualizar o estado das colunas
        setColumns(newColumns);
    };

    if (_.isEmpty(board)) {
        return (
            <>
                <div className="not-find"> Não encontrou Boards</div>
            </>
        );
    }

    return (
        <>
            <div className="board-columns">
                <Container
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    getChildPayload={(index) => columns[index]}
                    dragHandleSelector=".column-drag-handle"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: "column-drop-preview",
                    }}
                >
                    {columns &&
                        columns.length > 0 &&
                        columns.map((column, index) => {
                            return (
                                <Draggable key={column.id}>
                                    <Column
                                        column={column}
                                        onCardDrop={onCardDrop} // Passando a função como prop
                                    />
                                </Draggable>
                            );
                        })}
                </Container>

                <div className="add-new-column">
                    <i className="fa fa-plus icon">Add nova Coluna</i>
                </div>
            </div>
        </>
    );
};

export default BoardContent;
