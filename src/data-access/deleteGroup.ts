import { GroupModelType } from '../types/groups';

export const deleteGroupData = (group: GroupModelType) => group.destroy();
