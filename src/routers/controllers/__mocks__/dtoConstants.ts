import { Group } from '../../../models/group';
import { UserGroupModelType } from '../../../types/userGroup';

export const mockedUserDTO = {
    id: 'testId',
    login: 'testLogin',
    password: 'testPassword',
    age: 44,
    isDeleted: false
};

export const mockedGroupDTO = {
    id: 'testId',
    name: 'testName',
    permissions: ['READ']
} as Group;

export const mockedUserGroup = {
    usersId: 'userTestId',
    groupsId: 'groupTestId'
} as unknown as UserGroupModelType;
