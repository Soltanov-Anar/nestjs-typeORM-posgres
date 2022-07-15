import { IsString, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  model: string

  @IsOptional()
  @IsString()
  make: string

  @IsOptional()
  @IsString()
  color: string
}