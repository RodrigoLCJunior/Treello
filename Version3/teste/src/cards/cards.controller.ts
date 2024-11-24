// src/cards/cards.controller.ts
import { Controller, Post, Body, Param, Put } from '@nestjs/common';
import { CardService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('columns')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  // Rota para criar um novo card em uma coluna
  @Post(':columnId/cards')
  async createCard(
    @Param('columnId') columnId: string,  // Aqui você recebe como string
    @Body() createCardDto: CreateCardDto, // Recebe os dados do card
  ) {
    const parsedColumnId = String(columnId);  // Converte para número
    return this.cardService.createCard(parsedColumnId, createCardDto);
  }

  @Put('cards/:cardId/move')
  async updateCard(
    @Param('cardId') cardId: number,
    @Body() body: { columnId: string },  // O corpo da requisição deve conter o novo columnId
  ) {
    const { columnId } = body;
    return this.cardService.updateCard(columnId, cardId);
  }

  @Put(':cardId')
  async moveCard(
    @Param('cardId') cardId: number,
    @Body() updateData: { columnId: string },
  ) {
    return this.cardService.updateCardColumn(cardId, updateData.columnId);
  }
}
