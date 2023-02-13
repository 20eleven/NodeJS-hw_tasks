import { Sequelize } from 'sequelize';
import { GroupModelStaticType } from './groups';
import { UserGroupModelStaticType } from './userGroup';
import { UserModelStaticType } from './users';

export type DbType = {
    sequelize: Sequelize,
    group: GroupModelStaticType,
    user: UserModelStaticType,
    userGroup?: UserGroupModelStaticType,
};
