import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { preAuth, S3Service } from 'src/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import type { Request } from 'express';
import { randomUUID } from 'node:crypto';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, S3Service],
  exports: [],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(preAuth).forRoutes(UserController);
  }
}
