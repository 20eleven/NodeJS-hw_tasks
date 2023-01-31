import { GroupModelStaticType, GroupType } from '../types/groups';

export const createGroupData = (model: GroupModelStaticType, groupDTO: GroupType) => model.create(groupDTO);
