import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineProgressCreateWithoutPointOfContactInput } from './pipeline-progress-create-without-point-of-contact.input';
import { HideField } from '@nestjs/graphql';
import { PipelineProgressCreateOrConnectWithoutPointOfContactInput } from './pipeline-progress-create-or-connect-without-point-of-contact.input';
import { PipelineProgressCreateManyPointOfContactInputEnvelope } from './pipeline-progress-create-many-point-of-contact-input-envelope.input';
import { PipelineProgressWhereUniqueInput } from './pipeline-progress-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class PipelineProgressUncheckedCreateNestedManyWithoutPointOfContactInput {

    @HideField()
    create?: Array<PipelineProgressCreateWithoutPointOfContactInput>;

    @HideField()
    connectOrCreate?: Array<PipelineProgressCreateOrConnectWithoutPointOfContactInput>;

    @HideField()
    createMany?: PipelineProgressCreateManyPointOfContactInputEnvelope;

    @Field(() => [PipelineProgressWhereUniqueInput], {nullable:true})
    @Type(() => PipelineProgressWhereUniqueInput)
    connect?: Array<PipelineProgressWhereUniqueInput>;
}
