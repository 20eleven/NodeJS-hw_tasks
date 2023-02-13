import { UserGroupModelStaticType } from '../types/userGroup';

export const readUserGroupDataByGroupId = (userGroup: UserGroupModelStaticType, id: string) => {
    return userGroup.findOne({
        where: {
            groupsId: id
        }
    });
};
