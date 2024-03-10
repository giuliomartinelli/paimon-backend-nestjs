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
export class IsUniqueTaxIdValidator implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const isExistTaxId = await this.userService.findByTaxId(value);
    return isExistTaxId ? false : true;
  }
}

export const IsUniqueTaxId = (validationOptions: ValidationOptions) => {
  return (obj: Object, propertyName: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueTaxIdValidator,
    });
  };
};