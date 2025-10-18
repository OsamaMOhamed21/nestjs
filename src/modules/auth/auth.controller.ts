import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthenticationService } from './auth.service';
import { SignupBodyDto } from './dto/signup.dto';

@UsePipes(
  new ValidationPipe({
    stopAtFirstError: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
)
@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('signup')
  async signup(
    @Body()
    body: SignupBodyDto,
  ): Promise<{ message: string }> {
    console.log({ body });

    await this.authenticationService.signup(body);
    return { message: 'Done' };
  }

  @HttpCode(200)
  @Post('login')
  login() {
    return 'login Page';
  }
}
