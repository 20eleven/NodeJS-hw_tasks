import { GroupModelStaticType } from '../types/groups';

export const readAllGroupData = (model: GroupModelStaticType) => model.findAll();
