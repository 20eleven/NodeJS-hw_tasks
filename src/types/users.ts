import { User } from '../models/user';

export type UserIdType = string;

export type UserType = {
    id: UserIdType,
    login: string,
    password: string,
    age: number,
    isDeleted: boolean,
};

export type UserModelType = User;

export type UserModelStaticType = typeof User;
