import { Op } from 'sequelize';
import { UserModelStaticType } from '../types/users';

export const getAutoSuggestUsersData = (model: UserModelStaticType, loginSubstring: string, limit: number) => {
    return model.findAll({
        where: {
            login: { [Op.iLike]: `${loginSubstring}%` }
        },
        limit,
        attributes: {
            exclude: ['password']
        }
    });
};
