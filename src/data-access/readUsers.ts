import { Op } from 'sequelize';
import { UserModelStaticType } from '../types/users';

export const readUsersData = (model: UserModelStaticType, userIds: string[]) => {
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
