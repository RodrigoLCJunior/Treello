// src/cards/cards.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardService } from './cards.service';
import { CardController } from './cards.controller';
import { CardEntity } from './card.entity';
import { ColumnEntity } from '../column/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity, ColumnEntity])],
  controllers: [CardController],  // Corrigir o nome do controller
  providers: [CardService],  // Corrigir o nome do service
})
export class CardsModule {}
