import { UserModelStaticType, UserType } from '../types/users';

export const updateUserData = (model: UserModelStaticType, userDTO: UserType, id: string) => {
    return model.update(
        userDTO,
        {
            where: { id }
        }
    );
};
