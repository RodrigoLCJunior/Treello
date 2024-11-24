import { CreateCardDto } from 'src/cards/dto/create-card.dto';
export declare class CreateColumnDto {
    id: string;
    title: string;
    cardOrder: string[];
    cards: CreateCardDto[];
}
