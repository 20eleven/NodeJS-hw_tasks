import { v4 as uuid4 } from 'uuid';
import {
    createGroupData,
    readGroupData,
    readAllGroupData,
    updateGroupData,
    deleteGroupData
} from '../data-access';
import { GroupModelType, GroupModelStaticType, GroupType } from '../types/groups';

export default class GroupService {
    groupModel: GroupModelStaticType;
    constructor(groupModel: GroupModelStaticType) {
        this.groupModel = groupModel;
    }

    createGroup(groupDTO: GroupType) {
        groupDTO.id = uuid4();

        return createGroupData(this.groupModel, groupDTO);
    }

    readGroup(id: string) {
        return readGroupData(this.groupModel, id);
    }

    readAllGroup() {
        return readAllGroupData(this.groupModel);
    }

    updateGroup(groupDTO: GroupType, id: string) {
        return updateGroupData(this.groupModel, groupDTO, id);
    }

    deleteGroup(group: GroupModelType) {
        return deleteGroupData(group);
    }
}
