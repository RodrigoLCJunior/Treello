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
exports.CardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const card_entity_1 = require("./card.entity");
const column_entity_1 = require("../column/column.entity");
let CardService = class CardService {
    constructor(cardRepository, columnRepository) {
        this.cardRepository = cardRepository;
        this.columnRepository = columnRepository;
    }
    async createCard(columnId, createCardDto) {
        const column = await this.columnRepository.findOne({
            where: { id: columnId },
            relations: ['cards'],
        });
        if (!column) {
            throw new Error('Coluna não encontrada');
        }
        const newCard = this.cardRepository.create({
            ...createCardDto,
            column,
        });
        return await this.cardRepository.save(newCard);
    }
    async findCardsByColumn(columnId) {
        return await this.cardRepository.find({
            where: { column: { id: columnId } },
            relations: ['column'],
        });
    }
    async findCardById(cardId) {
        const card = await this.cardRepository.findOne({
            where: { id: cardId },
            relations: ['column'],
        });
        if (!card) {
            throw new Error('Card não encontrado');
        }
        return card;
    }
    async updateCard(columnId, cardId) {
        const card = await this.cardRepository.findOne({
            where: { id: cardId },
            relations: ['column'],
        });
        if (!card) {
            throw new Error('Card não encontrado');
        }
        const newColumn = await this.columnRepository.findOne({
            where: { id: columnId },
        });
        if (!newColumn) {
            throw new Error('Coluna não encontrada');
        }
        card.column = newColumn;
        return await this.cardRepository.save(card);
    }
    async updateCardColumn(cardId, columnId) {
        try {
            const card = await this.cardRepository.findOne({ where: { id: cardId } });
            if (!card) {
                throw new Error('Card não encontrado');
            }
            const column = await this.columnRepository.findOne({ where: { id: columnId } });
            if (!column) {
                throw new Error('Coluna não encontrada');
            }
            card.column = column;
            return await this.cardRepository.save(card);
        }
        catch (error) {
            throw new Error(`Erro ao atualizar a coluna do card: ${error.message}`);
        }
    }
};
exports.CardService = CardService;
exports.CardService = CardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(card_entity_1.CardEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(column_entity_1.ColumnEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CardService);
//# sourceMappingURL=cards.service.js.map