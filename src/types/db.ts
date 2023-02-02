import { Sequelize } from 'sequelize';
import { GroupModelStaticType } from './groups';
import { UserModelStaticType } from './users';

export type DbType = {
    sequelize: Sequelize,
    group: GroupModelStaticType,
    user: UserModelStaticType,
};
