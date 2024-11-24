import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  @IsString()
  boardId: string;

  @IsNotEmpty()
  @IsString()
  columnId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  image?: string;
}
