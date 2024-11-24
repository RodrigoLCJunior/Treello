import { CreateColumnDto } from 'src/column/dto/create-column.dto';
export declare class CreateBoardDto {
    id: string;
    titulo: string;
    columnOrder: string[];
    columns: CreateColumnDto[];
    cardOrder?: string[];
}
