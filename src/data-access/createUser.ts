import { UserModelStaticType, UserType } from '../types/users';

export const createUserData = (model: UserModelStaticType, userDTO: UserType) => model.create(userDTO);

