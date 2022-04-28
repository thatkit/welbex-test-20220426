import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ReturnedUserDto } from 'src/users/dto/returned-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<ReturnedUserDto | undefined> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { authorName: user.authorName, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
