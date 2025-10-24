import {
  Body,
  Controller,
  HttpCode,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthenticationService } from './auth.service';
import { confirmEmailDto, resendConfirmEmailDto, SignupBodyDto } from './dto/signup.dto';

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

  @Post('resend-confirm-email')
  async resendConfirmEmail(
    @Body()
    body: resendConfirmEmailDto,
  ): Promise<{ message: string }> {
    console.log({ body });

    await this.authenticationService.resendConfirmEmail(body);
    return { message: 'Done' };
  }

  @Patch('confirm-email')
  async confirmEmail(
    @Body()
    body: confirmEmailDto,
  ): Promise<{ message: string }> {
    console.log({ body });

    await this.authenticationService.confirmEmail(body);
    return { message: 'Done' };
  }
}
