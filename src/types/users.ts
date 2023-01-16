import { Model, ModelStatic } from 'sequelize';

export type UserType = {
    id: string,
    login: string,
    password: string,
    age: number,
    isDeleted: boolean,
};

export type UserModelType = Model<UserType, Partial<UserType>>;

export type UserModelStaticType = ModelStatic<UserModelType>;
