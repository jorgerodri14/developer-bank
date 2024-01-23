import { IsString, MinLength } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @MinLength(1)
  id: string;

  @IsString()
  @MinLength(12)
  accountNumber: string;
}
