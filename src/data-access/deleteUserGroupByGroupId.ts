import { UserGroupModelStaticType } from '../types/userGroup';

export const deleteUserGroupDataByGroupId = (userGroup: UserGroupModelStaticType, id: string) => {
    return userGroup.destroy({
        where: {
            groupsId: id
        }
    });
};
