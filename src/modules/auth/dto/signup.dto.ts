import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
  ValidateIf,
} from 'class-validator';
import { IsMatch } from 'src/common';

export class SignupBodyDto {
  @Length(2, 52)
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @ValidateIf((data: SignupBodyDto) => {
    return Boolean(data.password);
  })
  @IsMatch<string>(['password'])
  confirmPassword: string;
}
