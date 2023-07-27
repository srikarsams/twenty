import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CompanyCreateNestedOneWithoutPeopleInput } from '../company/company-create-nested-one-without-people.input';
import { WorkspaceCreateNestedOneWithoutPeopleInput } from '../workspace/workspace-create-nested-one-without-people.input';

@InputType()
export class PersonCreateWithoutPipelineProgressesInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    lastName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    phone?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    city?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CompanyCreateNestedOneWithoutPeopleInput, {nullable:true})
    company?: CompanyCreateNestedOneWithoutPeopleInput;

    @HideField()
    workspace!: WorkspaceCreateNestedOneWithoutPeopleInput;
}
