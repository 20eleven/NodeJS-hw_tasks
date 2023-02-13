import { Transaction } from 'sequelize';
import db from '../models';
import { GroupModelType } from '../types/groups';
import { UserModelType } from '../types/users';

export const addUsersToGroupData = (group: GroupModelType, users: UserModelType[]) => {
    db.sequelize.transaction(async (transaction: Transaction) => {
        await group.addUsers(users, { transaction });
    });
};
