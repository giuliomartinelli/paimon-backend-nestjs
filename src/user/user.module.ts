import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { IsUniqueEmailValidator } from './validator/is-unique-email.validator';
import { IsUniqueTaxIdValidator } from './validator/is-unique-tax-id.validator';
import { TaxIdValidator } from "./validator/tax-id.validator";
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService, 
    IsUniqueEmailValidator, 
    IsUniqueTaxIdValidator,
    TaxIdValidator
  ],
  exports: [UserService]
})
export class UserModule {}
