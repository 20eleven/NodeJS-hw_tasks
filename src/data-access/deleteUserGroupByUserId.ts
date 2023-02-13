import { UserGroupModelStaticType } from '../types/userGroup';
import { UserIdType } from '../types/users';

export const deleteUserGroupDataByUserId = (userGroup: UserGroupModelStaticType, id: UserIdType) => {
    return userGroup.destroy({
        where: {
            usersId: id
        }
    });
};
