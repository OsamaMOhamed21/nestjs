import { Types } from 'mongoose';
import { IUser } from './user.interfaces';
import { OtpEnum } from '../enums';

export interface IOtp {
  _id?: Types.ObjectId;

  code: string;
  expiredAt: Date;
  type: OtpEnum;

  createdBy: Types.ObjectId | IUser;

  createdAt?: Date;
  updateAt?: Date;
}
