import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  age: string;

  @IsNotEmpty()
  accountNumber: string;
}
