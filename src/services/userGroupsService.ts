import {
    addUsersToGroupData,
    deleteUserGroupDataByGroupId,
    deleteUserGroupDataByUserId,
    readUserGroupDataByGroupId
} from '../data-access';
import { GroupIdType, GroupModelType } from '../types/groups';
import { UserGroupModelStaticType } from '../types/userGroup';
import { UserIdType, UserModelsType } from '../types/users';

export default class UserGroupService {
    userGroupModel?: UserGroupModelStaticType;
    constructor(userGroupModel?: UserGroupModelStaticType) {
        this.userGroupModel = userGroupModel;
    }

    addUsersToGroup(group: GroupModelType, users: UserModelsType) {
        return addUsersToGroupData(group, users);
    }

    readUserGroupByGroupId(id: GroupIdType) {
        if (!this.userGroupModel) throw new Error("readUserGroupByGroupId: userGroupModel doesn't exist");

        return readUserGroupDataByGroupId(this.userGroupModel, id);
    }

    deleteUserGroupByGroupId(id: GroupIdType) {
        if (!this.userGroupModel) throw new Error("deleteUserGroupByGroupId: userGroupModel doesn't exist");

        return deleteUserGroupDataByGroupId(this.userGroupModel, id);
    }

    deleteUserGroupByUserId(id: UserIdType) {
        if (!this.userGroupModel) throw new Error("deleteUserGroupByUserId: userGroupModel doesn't exist");

        return deleteUserGroupDataByUserId(this.userGroupModel, id);
    }
}
