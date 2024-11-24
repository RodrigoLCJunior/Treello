// src/board/entities/column.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { BoardEntity } from '../boards/board.entity';
import { CardEntity } from '../cards/card.entity';

@Entity('columns')
export class ColumnEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('simple-array', { nullable: true })
  cardOrder: string[]; // Permite null ou um array vazio, sem valor padrão

  @OneToMany(() => CardEntity, card => card.column, { cascade: true })
  cards: CardEntity[];
}
