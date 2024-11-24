// src/cards/cards.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardEntity } from './card.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { ColumnEntity } from '../column/column.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private readonly cardRepository: Repository<CardEntity>,
    @InjectRepository(ColumnEntity)
    private readonly columnRepository: Repository<ColumnEntity>,
  ) {}

  // Função para criar um novo card
  async createCard(columnId: string, createCardDto: CreateCardDto) {
    // Buscar a coluna onde o card será associado
    const column = await this.columnRepository.findOne({
      where: { id: columnId },
      relations: ['cards'], // Inclui o relacionamento de cards para evitar problema de cascata
    });

    if (!column) {
      throw new Error('Coluna não encontrada');
    }

    // Criação do novo card, com os dados do DTO e associando à coluna
    const newCard = this.cardRepository.create({
      ...createCardDto,
      column,  // Relacionando o card à coluna
    });

    // Salvar o card no banco de dados
    return await this.cardRepository.save(newCard);
  }

  // Função para listar todos os cards de uma coluna específica
  async findCardsByColumn(columnId: string) {
    return await this.cardRepository.find({
      where: { column: { id: columnId } },
      relations: ['column'],  // Inclui o relacionamento para a coluna, se necessário
    });
  }

  // Função para buscar um card por ID
  async findCardById(cardId: number) {
    const card = await this.cardRepository.findOne({
      where: { id: cardId },
      relations: ['column'],  // Inclui o relacionamento com a coluna, se necessário
    });

    if (!card) {
      throw new Error('Card não encontrado');
    }

    return card;
  }

  // Função para atualizar o card e mudar sua coluna
async updateCard(columnId: string, cardId: number) {
  // Buscar o card pelo ID
  const card = await this.cardRepository.findOne({
    where: { id: cardId },
    relations: ['column'], // Certifica-se de que estamos obtendo o relacionamento da coluna
  });

  if (!card) {
    throw new Error('Card não encontrado');
  }

  // Buscar a nova coluna pelo ID
  const newColumn = await this.columnRepository.findOne({
    where: { id: columnId },
  });

  if (!newColumn) {
    throw new Error('Coluna não encontrada');
  }

  // Atualizar o card com a nova coluna
  card.column = newColumn;

  // Salvar a atualização no banco
  return await this.cardRepository.save(card);
}

async updateCardColumn(cardId: number, columnId: string) {
  try {
    // Busca o card com base no ID numérico
    const card = await this.cardRepository.findOne({ where: { id: cardId } });
    if (!card) {
      throw new Error('Card não encontrado');
    }

    // Busca a coluna com base no ID string
    const column = await this.columnRepository.findOne({ where: { id: columnId } });
    if (!column) {
      throw new Error('Coluna não encontrada');
    }

    // Atualiza a coluna do card
    card.column = column;

    // Salva o card atualizado
    return await this.cardRepository.save(card);
  } catch (error) {
    // Trata o erro e lança uma mensagem específica
    throw new Error(`Erro ao atualizar a coluna do card: ${error.message}`);
  }
}

}
