import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoadBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";

function App() {
  return (
    <div className="trello-master">
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
      
    </div>
  );
}

export default App;
/*

// src/components/KanbanBoard.js
import React, { useState, useEffect } from 'react';
import { createColumn as createColumnApi, getColumns, createCard as createCardApi } from './services/api';

const KanbanBoard = () => {
  const [columns, setColumns] = useState([]);
  const [newColumnName, setNewColumnName] = useState('');
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardImage, setNewCardImage] = useState('');
  const [newCardStatus, setNewCardStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColumns = async () => {
      try {
        const fetchedColumns = await getColumns();
        setColumns(fetchedColumns);
      } catch (error) {
        console.error('Erro ao buscar colunas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchColumns();
  }, []);

  const handleAddColumn = async () => {
    if (newColumnName.trim()) {
      try {
        const newColumn = await createColumnApi({ title: newColumnName });
        setColumns([...columns, newColumn]);
        setNewColumnName('');
      } catch (error) {
        console.error('Erro ao adicionar coluna:', error);
      }
    }
  };

  const handleAddCard = async (columnId) => {
    if (newCardTitle.trim() && newCardImage.trim() && newCardStatus.trim()) {
      try {
        const newCard = await createCardApi(columnId, {
          title: newCardTitle,
          image: newCardImage,
          status: newCardStatus,
        });

        // Adiciona o card à coluna
        setColumns(columns.map((col) =>
          col.id === columnId ? { ...col, cards: [...col.cards, newCard] } : col
        ));

        setNewCardTitle('');
        setNewCardImage('');
        setNewCardStatus('');
      } catch (error) {
        console.error('Erro ao adicionar card:', error);
      }
    } else {
      alert('Por favor, preencha todos os campos do card!');
    }
  };

  return (
    <div className="kanban-board">
      <div className="add-column">
        <input
          type="text"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
          placeholder="Nome da nova coluna"
        />
        <button onClick={handleAddColumn}>Adicionar Coluna</button>
      </div>

      {loading ? (
        <p>Carregando colunas...</p>
      ) : (
        <div className="columns">
          {columns.map((column) => (
            <div key={column.id} className="kanban-column">
              <h2>{column.title}</h2>

              <div className="add-card">
                <input
                  type="text"
                  value={newCardTitle}
                  onChange={(e) => setNewCardTitle(e.target.value)}
                  placeholder="Título do Card"
                />
                <input
                  type="text"
                  value={newCardImage}
                  onChange={(e) => setNewCardImage(e.target.value)}
                  placeholder="URL da Imagem"
                />
                <input
                  type="text"
                  value={newCardStatus}
                  onChange={(e) => setNewCardStatus(e.target.value)}
                  placeholder="Status do Card"
                />
                <button onClick={() => handleAddCard(column.id)}>Adicionar Card</button>
              </div>

              {column.cards && column.cards.length > 0 ? (
                <div className="kanban-cards">
                  {column.cards.map((card) => (
                    <div key={card.id} className="kanban-card">
                      <h3>{card.title}</h3>
                      <img src={card.image} alt={card.title} />
                      <p>Status: {card.status}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Nenhum card nesta coluna.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;*/
