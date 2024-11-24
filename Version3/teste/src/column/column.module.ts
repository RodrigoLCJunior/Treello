// src/columns/columns.module.ts
import { Module } from '@nestjs/common';
import { ColumnsController } from './columns.controller';
import { ColumnsService } from './columns.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CardEntity } from 'src/cards/card.entity';
import { ColumnEntity } from './column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity, ColumnEntity])],
  controllers: [ColumnsController],
  providers: [ColumnsService],
})
export class ColumnsModule {}
