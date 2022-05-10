import { JwtService } from '@nestjs/jwt';
import { ReturnedUserDto } from 'src/users/dto/returned-user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<ReturnedUserDto | undefined>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
}
