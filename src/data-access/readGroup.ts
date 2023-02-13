import { GroupIdType, GroupModelStaticType } from '../types/groups';

export const readGroupData = (model: GroupModelStaticType, id: GroupIdType) => model.findByPk(id);
