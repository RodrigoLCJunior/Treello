import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsService {
    private boards;
    create(createBoardDto: CreateBoardDto): CreateBoardDto;
    findAll(): any[];
}
