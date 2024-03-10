import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto>{
    const saltOrRounds = 10;
    const password = createUserDto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    
    const user = { ... createUserDto, id: uuid(), password: hash }
    const createdUser = await this.userRepository.save(user);    
    const userDto = new UserDto(createdUser)
    return userDto;
  }

  async findAll(): Promise<UserDto[]>{
    const listUser = await this.userRepository.find();    
    if(!listUser) throw new UnprocessableEntityException();
    const listUserDto = listUser.map( user => new UserDto(user) );
    return listUserDto;
  }

  async findOne(id: string): Promise<UserDto>{
    const user = await this.userRepository.findOneBy({ id });    
    if(!user) throw new NotFoundException();
    const userDto = new UserDto(user)
    return userDto;
  }

  async findByEmail(email: string): Promise<UserDto>{
    const user = await this.userRepository.findOneBy({ email });    
    if(!user) return;
    const userDto = new UserDto(user)
    return userDto;
  }

  async findByTaxId(taxId: string): Promise<UserDto>{
    const user = await this.userRepository.findOneBy({ taxId });    
    if(!user) return;
    const userDto = new UserDto(user)
    return userDto;
  }

  async authByEmailAndPassword(email: string, password: string): Promise<UserDto>{
    const user = await this.userRepository.findOneBy({ email });    
    if(!user) return;
    
    const ifPasswordValid = await bcrypt.compare(password, user.password);
    if(!ifPasswordValid) return;

    const userDto = new UserDto(user)
    return userDto;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDto>{
    const user = await this.userRepository.update(id, updateUserDto);
    if(!user.affected) throw new UnprocessableEntityException();
    return this.findOne(id);
  }

  async remove(id: string) {
    const user = await this.userRepository.delete(id);
    if(!user.affected) throw new UnprocessableEntityException();
    return;
  }
}
