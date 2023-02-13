import { Op } from 'sequelize';
import { UserIdsType, UserModelStaticType } from '../types/users';

export const readUsersData = (model: UserModelStaticType, userIds: UserIdsType) => {
    return model.findAll({
        where: {
            id: {
                [Op.or]: userIds
            }
        },
        attributes: {
            exclude: ['password']
        }
    });
};
