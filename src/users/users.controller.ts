import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() userData: RegisterDto) {
    return this.usersService.register(userData);
  }

  @Post('login')
  login(@Body() userData: Partial<RegisterDto>) {
    return this.usersService.login(userData);
  }

  @Post('verify')
  verify(@Body() userData: Partial<RegisterDto>) {
    return this.usersService.verify(userData);
  }
}
