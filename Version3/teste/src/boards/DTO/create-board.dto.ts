// src/board/dto/create-board.dto.ts
import { IsArray, IsString } from 'class-validator';
import { CreateColumnDto } from 'src/column/dto/create-column.dto';

export class CreateBoardDto {
  @IsString()
  id: string;

  @IsString()
  titulo: string;

  @IsArray()
  columnOrder: string[];

  @IsArray()
  columns: CreateColumnDto[];

  cardOrder?: string[]; // Propriedades opcionais compatíveis com a entidade

}
