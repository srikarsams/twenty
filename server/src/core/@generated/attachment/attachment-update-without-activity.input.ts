import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AttachmentType } from '../prisma/attachment-type.enum';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutAuthoredAttachmentsNestedInput } from '../user/user-update-one-required-without-authored-attachments-nested.input';

@InputType()
export class AttachmentUpdateWithoutActivityInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:true})
    fullPath?: string;

    @Field(() => AttachmentType, {nullable:true})
    type?: keyof typeof AttachmentType;

    @Field(() => String, {nullable:true})
    name?: string;

    @HideField()
    workspaceId?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutAuthoredAttachmentsNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutAuthoredAttachmentsNestedInput;
}
