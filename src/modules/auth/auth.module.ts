import { Module } from '@nestjs/common';
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';
import { UserModel, UserRepository } from 'src/DB';
import { SecurityService } from 'src/common';

@Module({
  imports: [UserModel],
  exports: [AuthenticationService],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UserRepository, SecurityService],
})
export class AuthenticationModule {}
