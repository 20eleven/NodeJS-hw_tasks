import { UserModelType } from '../types/users';

export const deleteUserData = (user: UserModelType) => {
    return user.update({ isDeleted: true });
};
