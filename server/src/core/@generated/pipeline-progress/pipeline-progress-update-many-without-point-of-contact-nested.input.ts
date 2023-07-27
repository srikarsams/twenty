import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineProgressCreateWithoutPointOfContactInput } from './pipeline-progress-create-without-point-of-contact.input';
import { HideField } from '@nestjs/graphql';
import { PipelineProgressCreateOrConnectWithoutPointOfContactInput } from './pipeline-progress-create-or-connect-without-point-of-contact.input';
import { PipelineProgressUpsertWithWhereUniqueWithoutPointOfContactInput } from './pipeline-progress-upsert-with-where-unique-without-point-of-contact.input';
import { PipelineProgressCreateManyPointOfContactInputEnvelope } from './pipeline-progress-create-many-point-of-contact-input-envelope.input';
import { PipelineProgressWhereUniqueInput } from './pipeline-progress-where-unique.input';
import { Type } from 'class-transformer';
import { PipelineProgressUpdateWithWhereUniqueWithoutPointOfContactInput } from './pipeline-progress-update-with-where-unique-without-point-of-contact.input';
import { PipelineProgressUpdateManyWithWhereWithoutPointOfContactInput } from './pipeline-progress-update-many-with-where-without-point-of-contact.input';
import { PipelineProgressScalarWhereInput } from './pipeline-progress-scalar-where.input';

@InputType()
export class PipelineProgressUpdateManyWithoutPointOfContactNestedInput {

    @HideField()
    create?: Array<PipelineProgressCreateWithoutPointOfContactInput>;

    @HideField()
    connectOrCreate?: Array<PipelineProgressCreateOrConnectWithoutPointOfContactInput>;

    @HideField()
    upsert?: Array<PipelineProgressUpsertWithWhereUniqueWithoutPointOfContactInput>;

    @HideField()
    createMany?: PipelineProgressCreateManyPointOfContactInputEnvelope;

    @Field(() => [PipelineProgressWhereUniqueInput], {nullable:true})
    @Type(() => PipelineProgressWhereUniqueInput)
    set?: Array<PipelineProgressWhereUniqueInput>;

    @Field(() => [PipelineProgressWhereUniqueInput], {nullable:true})
    @Type(() => PipelineProgressWhereUniqueInput)
    disconnect?: Array<PipelineProgressWhereUniqueInput>;

    @HideField()
    delete?: Array<PipelineProgressWhereUniqueInput>;

    @Field(() => [PipelineProgressWhereUniqueInput], {nullable:true})
    @Type(() => PipelineProgressWhereUniqueInput)
    connect?: Array<PipelineProgressWhereUniqueInput>;

    @HideField()
    update?: Array<PipelineProgressUpdateWithWhereUniqueWithoutPointOfContactInput>;

    @HideField()
    updateMany?: Array<PipelineProgressUpdateManyWithWhereWithoutPointOfContactInput>;

    @HideField()
    deleteMany?: Array<PipelineProgressScalarWhereInput>;
}
