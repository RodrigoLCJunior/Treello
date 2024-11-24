/*import axios from 'axios';

// Configuração do Axios
const api = axios.create({
  baseURL: 'http://localhost:3001/boards', // URL do backend
});

export default api;*/

// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // URL do seu backend
});

// Função para criar uma nova coluna
export const createColumn = async (columnData) => {
  try {
    const response = await api.post('/columns', columnData); // Envia os dados da coluna
    return response.data; // Retorna a coluna criada
  } catch (error) {
    console.error('Erro ao criar coluna:', error);
    throw error;
  }
};

// Função para buscar todas as colunas
export const getColumns = async () => {
  try {
    const response = await api.get('/columns'); // Busca todas as colunas
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar colunas:', error);
    return [];
  }
};

export const createCard = async (columnId, cardData) => {
  try {
    const response = await api.post(`/columns/${columnId}/cards`, cardData); 
    return response.data;
  } catch (error) {
    console.error('Erro ao criar card:', error);
    throw error;
  }
};

export const moveCard = async (cardId, destinationColumnId) => {
  try {
      const response = await api.put(`/cards/${cardId}`, {
          columnId: destinationColumnId,
      });
      return response.data; // Retorna o card atualizado
  } catch (error) {
      console.error('Erro ao mover o card:', error);
      throw error;
  }
};



