export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-3', 'column-2', 'column-1'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'A Fazer',
                    cardOrder: ['card-1', 'card-2', 'card-3'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Titulo card 1',
                            image: "https://www.negociosemmente.com.br/wp-content/uploads/2023/02/trello-o-que-e.jpg"
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Titulo card 2',
                            image: null
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Titulo card 3',
                            image: null
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'A Fazer 2',
                    cardOrder: ['card-4', 'card-5', 'card-6'],
                    cards: [
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Titulo card 4',
                            image: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Titulo card 5',
                            image: null
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Titulo card 6',
                            image: null
                        }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'A Fazer 3',
                    cardOrder: ['card-7', 'card-8', 'card-9'],
                    cards: [
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Titulo card 7',
                            image: null
                        },
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Titulo card 8',
                            image: null
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Titulo card 9',
                            image: null
                        }
                    ]
                },

            ]
        }
    ]
}

/*import React, { useEffect, useState } from 'react';
import { fetchInitData } from './services/api';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const initData = await fetchInitData();
                setData(initData);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

        getData();
    }, []);

    if (loading) return <div>Carregando...</div>;

    return (
        <div>
            {data.boards.map(board => (
                <div key={board.id}>
                    <h2>{board.title}</h2>
                    {board.columns.map(column => (
                        <div key={column.id}>
                            <h3>{column.title}</h3>
                            {column.cards.map(card => (
                                <div key={card.id}>{card.title}</div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;*/
