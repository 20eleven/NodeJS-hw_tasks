import { Model, ModelStatic } from 'sequelize';

export type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export type GroupType = {
    id: string;
    name: string;
    permissions: Array<Permission>;
};

export type GroupModelType = Model<GroupType, Partial<GroupType>>;

export type GroupModelStaticType = ModelStatic<GroupModelType>;
