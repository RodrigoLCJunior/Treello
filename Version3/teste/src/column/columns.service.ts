import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColumnEntity } from './column.entity';
import { CardEntity } from 'src/cards/card.entity';
import { CreateCardDto } from 'src/cards/dto/create-card.dto';


@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(ColumnEntity)
    private readonly columnRepository: Repository<ColumnEntity>,

    @InjectRepository(CardEntity)
    private readonly cardRepository: Repository<CardEntity>,
  ) {}

  // Cria uma nova coluna
  async create(createColumnDto: { title: string }): Promise<ColumnEntity> {
    const { title } = createColumnDto;

    // Criar e salvar a nova coluna
    const newColumn = this.columnRepository.create({ title });
    return this.columnRepository.save(newColumn);
  }

  async findAll(): Promise<ColumnEntity[]> {
    return this.columnRepository.find();
  }

  // src/board/columns.service.ts
async createCard(columnId: string, createCardDto: CreateCardDto): Promise<CardEntity> {
  const column = await this.columnRepository.findOne({ where: { id: columnId } });

  if (!column) {
    throw new Error('Column not found');
  }

  // Verifique se o campo 'id' do card está sendo passado corretamente ou se está vazio
  const newCard = this.cardRepository.create({ ...createCardDto, column });

  // O ID é gerado automaticamente pelo TypeORM (não precisa ser atribuído manualmente)
  await this.cardRepository.save(newCard);

  // Adiciona o card à coluna
  column.cards.push(newCard);
  await this.columnRepository.save(column);

  return newCard;
}
  
}
