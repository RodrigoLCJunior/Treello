// src/board/entities/card.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ColumnEntity } from '../column/column.entity';

@Entity('cards')
export class CardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  status: string;

  @ManyToOne(() => ColumnEntity, column => column.cards)
  column: ColumnEntity;
}
