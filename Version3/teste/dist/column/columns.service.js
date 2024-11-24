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
exports.ColumnsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const column_entity_1 = require("./column.entity");
const card_entity_1 = require("../cards/card.entity");
let ColumnsService = class ColumnsService {
    constructor(columnRepository, cardRepository) {
        this.columnRepository = columnRepository;
        this.cardRepository = cardRepository;
    }
    async create(createColumnDto) {
        const { title } = createColumnDto;
        const newColumn = this.columnRepository.create({ title });
        return this.columnRepository.save(newColumn);
    }
    async findAll() {
        return this.columnRepository.find();
    }
    async createCard(columnId, createCardDto) {
        const column = await this.columnRepository.findOne({ where: { id: columnId } });
        if (!column) {
            throw new Error('Column not found');
        }
        const newCard = this.cardRepository.create({ ...createCardDto, column });
        await this.cardRepository.save(newCard);
        column.cards.push(newCard);
        await this.columnRepository.save(column);
        return newCard;
    }
};
exports.ColumnsService = ColumnsService;
exports.ColumnsService = ColumnsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(column_entity_1.ColumnEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(card_entity_1.CardEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ColumnsService);
//# sourceMappingURL=columns.service.js.map