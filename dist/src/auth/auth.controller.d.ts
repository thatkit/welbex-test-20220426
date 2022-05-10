import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ReturnedUserDto } from 'src/users/dto/returned-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(newUser: CreateUserDto): Promise<ReturnedUserDto>;
    login(req: any): Promise<{
        accessToken: string;
    }>;
    getUsername(req: any): {
        username: any;
    };
}
