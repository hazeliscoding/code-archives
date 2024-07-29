import IUser from '@/interfaces/user';
import User from '@/models/User.model';
import { HydratedDocument } from 'mongoose';

export const createUser = async (
  user: IUser
): Promise<HydratedDocument<IUser>> => {
  return User.create(user);
};
