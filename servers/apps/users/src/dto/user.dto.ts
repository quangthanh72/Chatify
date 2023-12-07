import { Field, InputType } from "@nestjs/graphql";
import {IsNotEmpty, IsEmail, IsString, MinLength} from 'class-validator'

@InputType()
export class RegisterDto {
    @Field()
    @IsNotEmpty({message: 'First name is required.'})
    @IsString({message: 'First name must need to bes one string.'})
    firstName: string

    @Field()
    @IsNotEmpty({message: 'Last name is required.'})
    @IsString({message: 'Last name must need to bes one string.'})
    lastName: string

    
}
