import { CardEntity } from '../cards/card.entity';
export declare class ColumnEntity {
    id: string;
    title: string;
    cardOrder: string[];
    cards: CardEntity[];
}
