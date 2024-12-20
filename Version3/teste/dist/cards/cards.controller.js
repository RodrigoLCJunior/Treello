"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const cards_service_1 = require("./cards.service");
const create_card_dto_1 = require("./dto/create-card.dto");
let CardController = class CardController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    async createCard(columnId, createCardDto) {
        const parsedColumnId = String(columnId);
        return this.cardService.createCard(parsedColumnId, createCardDto);
    }
    async updateCard(cardId, body) {
        const { columnId } = body;
        return this.cardService.updateCard(columnId, cardId);
    }
    async moveCard(cardId, updateData) {
        return this.cardService.updateCardColumn(cardId, updateData.columnId);
    }
};
exports.CardController = CardController;
__decorate([
    (0, common_1.Post)(':columnId/cards'),
    __param(0, (0, common_1.Param)('columnId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_card_dto_1.CreateCardDto]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "createCard", null);
__decorate([
    (0, common_1.Put)('cards/:cardId/move'),
    __param(0, (0, common_1.Param)('cardId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "updateCard", null);
__decorate([
    (0, common_1.Put)(':cardId'),
    __param(0, (0, common_1.Param)('cardId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "moveCard", null);
exports.CardController = CardController = __decorate([
    (0, common_1.Controller)('columns'),
    __metadata("design:paramtypes", [cards_service_1.CardService])
], CardController);
//# sourceMappingURL=cards.controller.js.map