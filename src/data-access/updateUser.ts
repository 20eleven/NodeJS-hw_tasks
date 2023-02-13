import { UserIdType, UserModelStaticType, UserType } from '../types/users';

export const updateUserData = (model: UserModelStaticType, userDTO: UserType, id: UserIdType) => {
    return model.update(
        userDTO,
        {
            where: { id }
        }
    );
};
