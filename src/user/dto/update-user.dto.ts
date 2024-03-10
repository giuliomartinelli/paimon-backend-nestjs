import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @MaxLength(128)
    firstName: string;

    @IsOptional()
    @MaxLength(128)
    lastName: string;
  
    @IsOptional()
    @MinLength(6)
    @MaxLength(128)
    password: string;
}
