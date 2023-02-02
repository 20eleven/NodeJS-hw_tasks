import { Group } from '../models/group';

export type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export type GroupIdType = string;

export type GroupType = {
    id: GroupIdType;
    name: string;
    permissions: Array<Permission>;
};

export type GroupModelType = Group;

export type GroupModelStaticType = typeof Group;
