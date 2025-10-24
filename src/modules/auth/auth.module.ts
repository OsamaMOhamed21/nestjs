import { Module } from '@nestjs/common';
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';
import { OtpModel, OtpRepository, UserModel, UserRepository } from 'src/DB';
import { SecurityService } from 'src/common';

@Module({
  imports: [UserModel, OtpModel],
  exports: [AuthenticationService],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    UserRepository,
    SecurityService,
    OtpRepository,
  ],
})
export class AuthenticationModule {}
