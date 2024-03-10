import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
const validarCpf = require('validar-cpf');


@Injectable()
@ValidatorConstraint({ async: true })
export class TaxIdValidator implements ValidatorConstraintInterface {
  constructor() {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    return validarCpf(value);
  }
}

export const TaxId = (validationOptions: ValidationOptions) => {
  return (obj: Object, propertyName: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: TaxIdValidator,
    });
  };
};