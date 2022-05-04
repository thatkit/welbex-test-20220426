import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ReturnedUserDto } from 'src/users/dto/returned-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  register(@Body() newUser: CreateUserDto): Promise<ReturnedUserDto> {
    // console.log('Auth register POST:', newUser);
    return this.usersService.createUser(newUser);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    // console.log('Auth login POST:', req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('login')
  getUsername(@Request() req) {
    console.log('Auth getUsername GET:', req.user.username);
    return { username: req.user.username };
  }
}
