// src/boards/boards.service.ts
import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards = [];

  create(createBoardDto: CreateBoardDto) {
    this.boards.push(createBoardDto);
    return createBoardDto;
  }

  findAll() {
    return this.boards;
  }
}
