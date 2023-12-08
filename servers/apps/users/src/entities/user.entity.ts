import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields:"id")')
export class Avatars {
  @Field()
  id: string;

  @Field()
  url: string;

  @Field()
  userId: string;
}

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  dob: Date;

  @Field()
  age: number;

  @Field()
  userName: string;

  @Field()
  password: string;

  @Field()
  role: string;

  @Field()
  createAt: Date;

  @Field()
  updatedAt: Date;
}
