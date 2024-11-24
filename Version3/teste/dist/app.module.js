"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./categories/category.entity");
const categories_module_1 = require("./categories/categories.module");
const cards_module_1 = require("./cards/cards.module");
const card_entity_1 = require("./cards/card.entity");
const board_module_1 = require("./boards/board.module");
const column_module_1 = require("./column/column.module");
const board_entity_1 = require("./boards/board.entity");
const column_entity_1 = require("./column/column.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "unicesumar",
                password: "unicesumar",
                database: "blog",
                entities: [category_entity_1.Category, card_entity_1.CardEntity, board_entity_1.BoardEntity, column_entity_1.ColumnEntity],
                synchronize: true,
                driver: require('mysql2'),
            }),
            categories_module_1.CategoriesModule,
            cards_module_1.CardsModule,
            board_module_1.BoardsModule,
            column_module_1.ColumnsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map