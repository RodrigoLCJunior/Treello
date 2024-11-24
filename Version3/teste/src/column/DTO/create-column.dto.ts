// src/board/dto/create-column.dto.ts
import { IsArray, IsString } from 'class-validator';
import { CreateCardDto } from 'src/cards/dto/create-card.dto'; 

export class CreateColumnDto {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsArray()
  cardOrder: string[];

  @IsArray()
  cards: CreateCardDto[];
}
