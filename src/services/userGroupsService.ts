import { addUsersToGroupData } from '../data-access';
import { GroupModelType } from '../types/groups';
import { UserModelType } from '../types/users';

export default class UserGroupService {
    addUsersToGroup(group: GroupModelType, user: UserModelType) {
        return addUsersToGroupData(group, user);
    }
}
