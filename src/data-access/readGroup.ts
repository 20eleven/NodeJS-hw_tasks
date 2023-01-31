import { GroupModelStaticType } from '../types/groups';

export const readGroupData = (model: GroupModelStaticType, id: string) => model.findByPk(id);
