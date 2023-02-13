import { GroupIdType } from '../types/groups';
import { UserGroupModelStaticType } from '../types/userGroup';

export const readUserGroupDataByGroupId = (userGroup: UserGroupModelStaticType, id: GroupIdType) => {
    return userGroup.findOne({
        where: {
            groupsId: id
        }
    });
};
