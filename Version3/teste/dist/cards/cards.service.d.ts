import { Repository } from 'typeorm';
import { CardEntity } from './card.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { ColumnEntity } from '../column/column.entity';
export declare class CardService {
    private readonly cardRepository;
    private readonly columnRepository;
    constructor(cardRepository: Repository<CardEntity>, columnRepository: Repository<ColumnEntity>);
    createCard(columnId: string, createCardDto: CreateCardDto): Promise<CardEntity>;
    findCardsByColumn(columnId: string): Promise<CardEntity[]>;
    findCardById(cardId: number): Promise<CardEntity>;
    updateCard(columnId: string, cardId: number): Promise<CardEntity>;
    updateCardColumn(cardId: number, columnId: string): Promise<CardEntity>;
}
