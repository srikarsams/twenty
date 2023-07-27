import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ActivityType } from '../prisma/activity-type.enum';
import { HideField } from '@nestjs/graphql';
import { CommentThreadTargetUpdateManyWithoutCommentThreadNestedInput } from '../comment-thread-target/comment-thread-target-update-many-without-comment-thread-nested.input';
import { CommentUpdateManyWithoutCommentThreadNestedInput } from '../comment/comment-update-many-without-comment-thread-nested.input';
import { WorkspaceUpdateOneRequiredWithoutCommentThreadsNestedInput } from '../workspace/workspace-update-one-required-without-comment-threads-nested.input';
import { UserUpdateOneRequiredWithoutAuthoredCommentThreadsNestedInput } from '../user/user-update-one-required-without-authored-comment-threads-nested.input';
import { UserUpdateOneWithoutAssignedCommentThreadsNestedInput } from '../user/user-update-one-without-assigned-comment-threads-nested.input';

@InputType()
export class CommentThreadUpdateWithoutAttachmentsInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => ActivityType, {nullable:true})
    type?: keyof typeof ActivityType;

    @Field(() => Date, {nullable:true})
    reminderAt?: Date | string;

    @Field(() => Date, {nullable:true})
    dueAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentThreadTargetUpdateManyWithoutCommentThreadNestedInput, {nullable:true})
    commentThreadTargets?: CommentThreadTargetUpdateManyWithoutCommentThreadNestedInput;

    @Field(() => CommentUpdateManyWithoutCommentThreadNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutCommentThreadNestedInput;

    @HideField()
    workspace?: WorkspaceUpdateOneRequiredWithoutCommentThreadsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutAuthoredCommentThreadsNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutAuthoredCommentThreadsNestedInput;

    @Field(() => UserUpdateOneWithoutAssignedCommentThreadsNestedInput, {nullable:true})
    assignee?: UserUpdateOneWithoutAssignedCommentThreadsNestedInput;
}
