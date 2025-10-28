import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { preAuth } from 'src/common';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(preAuth).forRoutes(UserController);
  }
}
