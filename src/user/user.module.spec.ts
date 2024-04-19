import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user.module';
import { User } from './entities/user.entity';
import { MysqlConfigService } from '../config/mysql.config.service';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { IsUniqueEmailValidator } from './validator/is-unique-email.validator';

describe('UserModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal:true
        }),
        TypeOrmModule.forRootAsync({
          useClass:MysqlConfigService,
          inject:[MysqlConfigService]
        }),
        TypeOrmModule.forFeature([User]),
        UserModule,
      ],
    }).compile();
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should provide UserService', () => {
    const service = module.get<UserService>(UserService);
    expect(service).toBeDefined();
  });
  it('should provide UserController', () => {
    const controller = module.get<UserController>(UserController);
    expect(controller).toBeDefined();
  });

  it('should provide IsUniqueEmailValidator', () => {
    const isUniqueEmailValidator = module.get<IsUniqueEmailValidator>(IsUniqueEmailValidator);
    expect(isUniqueEmailValidator).toBeDefined();
  });

});