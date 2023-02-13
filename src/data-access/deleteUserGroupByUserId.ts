import { UserGroupModelStaticType } from '../types/userGroup';

export const deleteUserGroupDataByUserId = (userGroup: UserGroupModelStaticType, id: string) => {
    return userGroup.destroy({
        where: {
            usersId: id
        }
    });
};
