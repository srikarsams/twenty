import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutPipelineProgressesInput } from './person-create-without-pipeline-progresses.input';
import { HideField } from '@nestjs/graphql';
import { PersonCreateOrConnectWithoutPipelineProgressesInput } from './person-create-or-connect-without-pipeline-progresses.input';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class PersonCreateNestedOneWithoutPipelineProgressesInput {

    @HideField()
    create?: PersonCreateWithoutPipelineProgressesInput;

    @HideField()
    connectOrCreate?: PersonCreateOrConnectWithoutPipelineProgressesInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: PersonWhereUniqueInput;
}
