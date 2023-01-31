import { GroupModelStaticType, GroupType } from '../types/groups';

export const updateGroupData = (model: GroupModelStaticType, groupDTO: GroupType, id: string) => {
    return model.update(
        groupDTO,
        {
            where: { id }
        }
    );
};
