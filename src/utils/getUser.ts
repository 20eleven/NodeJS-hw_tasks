import { users } from '../data/usersDB';
import { User } from '../types/users';

export const getUserById = (paramsId: string) => users.find(({ id }: User) => paramsId === id);

