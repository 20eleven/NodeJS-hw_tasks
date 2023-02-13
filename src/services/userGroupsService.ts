import {
    addUsersToGroupData,
    deleteUserGroupDataByGroupId,
    deleteUserGroupDataByUserId,
    readUserGroupDataByGroupId
} from '../data-access';
import { GroupModelType } from '../types/groups';
import { UserGroupModelStaticType } from '../types/userGroup';
import { UserModelType } from '../types/users';

export default class UserGroupService {
    userGroupModel?: UserGroupModelStaticType;
    constructor(userGroupModel?: UserGroupModelStaticType) {
        this.userGroupModel = userGroupModel;
    }

    addUsersToGroup(group: GroupModelType, users: UserModelType[]) {
        return addUsersToGroupData(group, users);
    }

    readUserGroupByGroupId(id: string) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return readUserGroupDataByGroupId(this.userGroupModel!, id);
    }

    deleteUserGroupByGroupId(id: string) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return deleteUserGroupDataByGroupId(this.userGroupModel!, id);
    }

    deleteUserGroupByUserId(id: string) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return deleteUserGroupDataByUserId(this.userGroupModel!, id);
    }
}
