import { Model, ModelStatic } from 'sequelize';

export type UserGroupType = {
  usersId: string;
  groupsId: string;
};

export type UserGroupModelType = Model<UserGroupType, Partial<UserGroupType>>;

export type UserGroupModelStaticType = ModelStatic<UserGroupModelType>;
