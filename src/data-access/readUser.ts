import { UserIdType, UserModelStaticType } from '../types/users';

export const readUserData = (model: UserModelStaticType, id: UserIdType, withPassword = false) => {
    return model.findByPk(id, {
        ...(!withPassword && {
            attributes: {
                exclude: ['password']
            }
        })
    });
};
