import { UserModelStaticType, UserType } from '../types/users';

export const readUserByLoginData = (model: UserModelStaticType, login: UserType['login']) => {
    return model.findOne({
        where: {
            login
        }
    });
};
