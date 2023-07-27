import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutPipelineProgressesInput } from './person-update-without-pipeline-progresses.input';
import { HideField } from '@nestjs/graphql';
import { PersonCreateWithoutPipelineProgressesInput } from './person-create-without-pipeline-progresses.input';

@InputType()
export class PersonUpsertWithoutPipelineProgressesInput {

    @HideField()
    update!: PersonUpdateWithoutPipelineProgressesInput;

    @HideField()
    create!: PersonCreateWithoutPipelineProgressesInput;
}
