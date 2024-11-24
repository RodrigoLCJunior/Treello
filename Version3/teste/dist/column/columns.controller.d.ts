import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { CreateCardDto } from 'src/cards/dto/create-card.dto';
export declare class ColumnsController {
    private readonly columnsService;
    constructor(columnsService: ColumnsService);
    create(createColumnDto: CreateColumnDto): Promise<import("./column.entity").ColumnEntity>;
    findAll(): Promise<import("./column.entity").ColumnEntity[]>;
    createCard(columnId: string, createCardDto: CreateCardDto): Promise<import("../cards/card.entity").CardEntity>;
}
