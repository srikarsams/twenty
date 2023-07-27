import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AttachmentType } from '../prisma/attachment-type.enum';
import { HideField } from '@nestjs/graphql';
import { CommentThreadUpdateOneRequiredWithoutAttachmentsNestedInput } from '../comment-thread/comment-thread-update-one-required-without-attachments-nested.input';

@InputType()
export class AttachmentUpdateWithoutAuthorInput {

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

    @Field(() => CommentThreadUpdateOneRequiredWithoutAttachmentsNestedInput, {nullable:true})
    activity?: CommentThreadUpdateOneRequiredWithoutAttachmentsNestedInput;
}
