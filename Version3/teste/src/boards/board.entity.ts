// src/board/entities/board.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ColumnEntity } from '../column/column.entity';
import { isString } from 'class-validator';

@Entity('boards')
export class BoardEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: String;

  @Column('simple-array')
  columnOrder: string[];

}
