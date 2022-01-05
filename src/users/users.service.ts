import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private readonly jwtService: JwtService) {}

  register(userData: RegisterDto) {
    return 'This action adds a new user';
  }

  login(userData: any) {
    userData = { userId: 5 };
    const tokenData = this.createToken(userData);
    return this.createCookie(tokenData);
  }

  createToken(user) {
    const dataStoredInToken = { userId: user.userId };
    const expiresIn = 60 * 60;
    return {
      expiresIn,
      token: this.jwtService.sign(dataStoredInToken, { expiresIn }),
    };
  }

  createCookie(tokenData) {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}; path=/;`;
  }

  verify(token) {
    console.log(token);
    const decoded = this.jwtService.verify(token.token);
    return decoded;
  }
}
