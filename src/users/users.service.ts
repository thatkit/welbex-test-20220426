import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnedUserDto } from './dto/returned-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<ReturnedUserDto> {
    return this.userRepository.save(createUserDto);
  }

  async findOne(email: string): Promise<CreateUserDto | undefined> {
    return this.userRepository.findOne({ email });
  }
}
