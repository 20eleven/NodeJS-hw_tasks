import { UserIdType, UserModelStaticType } from '../types/users';

export const readUserData = (model: UserModelStaticType, id: UserIdType) => {
    return model.findByPk(id, {
        attributes: {
            exclude: ['password']
        }
    });
};
