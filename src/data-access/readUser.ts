import { UserModelStaticType } from '../types/users';

export const readUserData = (model: UserModelStaticType, id: string) => {
    return model.findByPk(id, {
        attributes: {
            exclude: ['password']
        }
    });
};
