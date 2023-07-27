import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutPipelineProgressesInput } from './person-create-without-pipeline-progresses.input';
import { HideField } from '@nestjs/graphql';
import { PersonCreateOrConnectWithoutPipelineProgressesInput } from './person-create-or-connect-without-pipeline-progresses.input';
import { PersonUpsertWithoutPipelineProgressesInput } from './person-upsert-without-pipeline-progresses.input';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutPipelineProgressesInput } from './person-update-without-pipeline-progresses.input';

@InputType()
export class PersonUpdateOneWithoutPipelineProgressesNestedInput {

    @HideField()
    create?: PersonCreateWithoutPipelineProgressesInput;

    @HideField()
    connectOrCreate?: PersonCreateOrConnectWithoutPipelineProgressesInput;

    @HideField()
    upsert?: PersonUpsertWithoutPipelineProgressesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @HideField()
    delete?: boolean;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: PersonWhereUniqueInput;

    @HideField()
    update?: PersonUpdateWithoutPipelineProgressesInput;
}
