import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { IUser, SecurityService } from 'src/common';
import { UserRepository } from 'src/DB';
import { SignupBodyDto } from './dto/signup.dto';
import { generateHash } from 'src/common/utils';

@Injectable()
export class AuthenticationService {
  private user: IUser[] = [];
  constructor(
    private readonly userRepository: UserRepository,
    private readonly securityService: SecurityService,
  ) {}

  async signup(data: SignupBodyDto): Promise<string> {
    const { username, email, password } = data;
    const checkEmailExists = await this.userRepository.findOne({
      filter: { email },
    });
    if (checkEmailExists) {
      throw new ConflictException('Email Exists');
    }

    const [user] = await this.userRepository.create({
      data: [
        {
          username,
          email,
          // password,
          password: await this.securityService.generateHash(password),
        },
      ],
    });
    if (!user) {
      throw new BadRequestException('Fail To Signup This Account');
    }
    return 'Done';
  }
}
