// src/boards/boards.module.ts
import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports: [],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
