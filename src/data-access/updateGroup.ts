import { GroupIdType, GroupModelStaticType, GroupType } from '../types/groups';

export const updateGroupData = (model: GroupModelStaticType, groupDTO: GroupType, id: GroupIdType) => {
    return model.update(
        groupDTO,
        {
            where: { id }
        }
    );
};
