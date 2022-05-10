import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnedUserDto } from './dto/returned-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<ReturnedUserDto>;
    findOne(username: string): Promise<CreateUserDto | undefined>;
}
