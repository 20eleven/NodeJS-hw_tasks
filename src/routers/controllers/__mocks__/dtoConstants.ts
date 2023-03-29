import { Group } from '../../../models/group';

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
