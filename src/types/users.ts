import { User } from '../models/user';

export type UserIdType = string;

export type UserIdsType = UserIdType[];

export type UserType = {
    id: UserIdType,
    login: string,
    password: string,
    age: number,
    isDeleted: boolean,
};

export type UserModelType = User;

export type UserModelsType = UserModelType[];

export type UserModelStaticType = typeof User;
