import { Model, ModelStatic } from 'sequelize';
import { GroupIdType } from './groups';
import { UserIdType } from './users';

export type UserGroupType = {
  usersId: UserIdType;
  groupsId: GroupIdType;
};

export type UserGroupModelType = Model<UserGroupType, Partial<UserGroupType>>;

export type UserGroupModelStaticType = ModelStatic<UserGroupModelType>;
