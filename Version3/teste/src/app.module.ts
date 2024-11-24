import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories/category.entity';
import { CategoriesModule } from './categories/categories.module';
import { CardsModule } from './cards/cards.module';
import { CardEntity } from './cards/card.entity';
import { BoardsModule } from './boards/board.module';
import { ColumnsModule } from './column/column.module';
import { BoardEntity } from './boards/board.entity';
import { ColumnEntity } from './column/column.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "unicesumar",
      password: "unicesumar",
      database: "blog",
      entities: [Category, CardEntity, BoardEntity, ColumnEntity],
      synchronize: true,
      driver: require('mysql2'), // Aqui você especifica o pacote mysql2
    }),
    CategoriesModule,
    CardsModule,
    BoardsModule,
    ColumnsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
