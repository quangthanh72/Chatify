import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MinLength,
  IsDate,
} from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'First name is required.' })
  @IsString({ message: 'First name must need to be one string.' })
  firstName: string;

  @Field()
  @IsNotEmpty({ message: 'Last name is required.' })
  @IsString({ message: 'Last name must need to be one string.' })
  lastName: string;

  @Field()
  @IsNotEmpty({ message: 'Date of birth is require.' })
  @IsDate({ message: 'Date of birth is invalid.' })
  dob: Date;

  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email is invalid.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Username is required.' })
  @IsString({ message: 'Username must need to be one string.' })
  username: string;
}

@InputType()
export class ActivationDto {
  @Field()
  @IsNotEmpty({ message: 'Activation token is required.' })
  activationToken: string;

  @Field()
  @IsNotEmpty({ message: 'Activation code is required.' })
  activationCode: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Username is required.' })
  @IsString({ message: 'Username must be valid.' })
  userName: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}
