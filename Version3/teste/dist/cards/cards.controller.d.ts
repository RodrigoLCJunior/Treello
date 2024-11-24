import { CardService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    createCard(columnId: string, createCardDto: CreateCardDto): Promise<import("./card.entity").CardEntity>;
    updateCard(cardId: number, body: {
        columnId: string;
    }): Promise<import("./card.entity").CardEntity>;
    moveCard(cardId: number, updateData: {
        columnId: string;
    }): Promise<import("./card.entity").CardEntity>;
}
