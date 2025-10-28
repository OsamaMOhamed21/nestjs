import { Controller, Get, Headers, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { RoleEnum } from 'src/common/enums';
import { Auth, PreferredLanguageInterceptor, User } from 'src/common';
import type { UserDocument } from 'src/DB';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(PreferredLanguageInterceptor)
  @Auth([RoleEnum.user, RoleEnum.admin])
  @Get()
  profile(
    @Headers() header: any,
    @User() user: UserDocument,
  ): {
    message: string;
  } {
    console.log({
      lang: header['accept-language'],
      user,
    });
    return { message: 'Done' };
  }
}
