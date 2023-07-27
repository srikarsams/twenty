import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutPipelineProgressesInput } from './person-create-without-pipeline-progresses.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PersonCreateOrConnectWithoutPipelineProgressesInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: PersonWhereUniqueInput;

    @HideField()
    create!: PersonCreateWithoutPipelineProgressesInput;
}
