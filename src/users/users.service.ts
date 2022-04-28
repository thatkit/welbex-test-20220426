import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnedUserDto } from './dto/returned-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  private currentUsername: string;

  async createUser(createUserDto: CreateUserDto): Promise<ReturnedUserDto> {
    const { password, ...user } = await this.userRepository.save({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });
    return user;
  }

  async findOne(username: string): Promise<CreateUserDto | undefined> {
    const user = await this.userRepository.findOne({ username });
    if (user) this.setCurrentUser(username);
    return user;
  }

  setCurrentUser(username: string) {
    this.currentUsername = username;
  }
}
