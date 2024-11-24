import { Repository } from 'typeorm';
import { ColumnEntity } from './column.entity';
import { CardEntity } from 'src/cards/card.entity';
import { CreateCardDto } from 'src/cards/dto/create-card.dto';
export declare class ColumnsService {
    private readonly columnRepository;
    private readonly cardRepository;
    constructor(columnRepository: Repository<ColumnEntity>, cardRepository: Repository<CardEntity>);
    create(createColumnDto: {
        title: string;
    }): Promise<ColumnEntity>;
    findAll(): Promise<ColumnEntity[]>;
    createCard(columnId: string, createCardDto: CreateCardDto): Promise<CardEntity>;
}
