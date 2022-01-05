import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
