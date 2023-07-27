import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorScheme } from '../prisma/color-scheme.enum';
import * as Validator from 'class-validator';
import { UserUncheckedUpdateOneWithoutSettingsNestedInput } from '../user/user-unchecked-update-one-without-settings-nested.input';

@InputType()
export class UserSettingsUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ColorScheme, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    colorScheme?: keyof typeof ColorScheme;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    locale?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUncheckedUpdateOneWithoutSettingsNestedInput, {nullable:true})
    user?: UserUncheckedUpdateOneWithoutSettingsNestedInput;
}
