import { Injectable } from '@nestjs/common';
import { IUser } from 'src/common';

@Injectable()
export class UserService {
  constructor() {}

  allUsers(): IUser[] {
    return [{ id: 2, name: 'skdfjvm', email: 'fvijk', password: 'svkjm' }];
  }
}
