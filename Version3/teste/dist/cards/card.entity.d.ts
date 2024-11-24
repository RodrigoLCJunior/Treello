import { ColumnEntity } from '../column/column.entity';
export declare class CardEntity {
    id: number;
    title: string;
    image: string;
    status: string;
    column: ColumnEntity;
}
