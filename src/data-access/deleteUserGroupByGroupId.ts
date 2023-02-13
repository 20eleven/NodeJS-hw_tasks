import { GroupIdType } from '../types/groups';
import { UserGroupModelStaticType } from '../types/userGroup';

export const deleteUserGroupDataByGroupId = (userGroup: UserGroupModelStaticType, id: GroupIdType) => {
    return userGroup.destroy({
        where: {
            groupsId: id
        }
    });
};
