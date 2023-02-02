import { GroupModelType } from '../types/groups';
import { UserModelType } from '../types/users';

export const addUsersToGroupData = (group: GroupModelType, user: UserModelType) => {
    return group.addUser(user);
};
