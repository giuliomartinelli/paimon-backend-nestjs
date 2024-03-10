import { IsNotEmpty, IsEmail, MaxLength, MinLength } from "class-validator";
import { IsUniqueEmail } from "../validator/is-unique-email.validator";
import { IsUniqueTaxId } from "../validator/is-unique-tax-id.validator";
import { TaxId } from "../validator/tax-id.validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(32)
    @IsUniqueTaxId({ message: 'IsUniqueTaxId' })
    @TaxId({ message: 'TaxId' })
    taxId: string;

    @IsNotEmpty()
    @MaxLength(255)
    @IsEmail()
    @IsUniqueEmail({ message: 'IsUniqueEmail' })
    email: string;

    @IsNotEmpty()
    @MaxLength(128)
    firstName: string;

    @IsNotEmpty()
    @MaxLength(128)
    lastName: string;
  
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(128)
    password: string;
}
