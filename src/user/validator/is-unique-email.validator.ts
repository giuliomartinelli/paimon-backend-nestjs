import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../user.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const isExistEmail = await this.userService.findByEmail(value);
    return isExistEmail ? false : true;
  }
}

export const IsUniqueEmail = (validationOptions: ValidationOptions) => {
  return (obj: Object, propertyName: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueEmailValidator,
    });
  };
};