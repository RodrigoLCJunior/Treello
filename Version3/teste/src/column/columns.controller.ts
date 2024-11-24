import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { CreateCardDto } from 'src/cards/dto/create-card.dto';


@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  // Cria uma nova coluna
  @Post()
  create(@Body() createColumnDto: CreateColumnDto) {
    return this.columnsService.create(createColumnDto);
  }

  @Get()
  findAll() {
    return this.columnsService.findAll();
  }

  @Post(':columnId/cards') 
  createCard(@Param('columnId') columnId: string, @Body() createCardDto: CreateCardDto) {
    return this.columnsService.createCard(columnId, createCardDto);
  }
}
