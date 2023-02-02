import {
    Association,
    DataTypes,
    HasManyAddAssociationMixin,
    Model,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute
} from 'sequelize';
import { GroupIdType, Permission } from '../types/groups';
import { User } from './user';

export class Group extends Model<
    InferAttributes<Group, { omit: 'userGroups' }>,
    InferCreationAttributes<Group, { omit: 'userGroups' }>
> {
    declare id: CreationOptional<GroupIdType>;
    declare name: string;
    declare permissions: Array<Permission>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare addUser: HasManyAddAssociationMixin<User, number>;

    declare userGroups?: NonAttribute<User[]>;
    declare static associations: {
        userGroups: Association<Group, User>;
    };
}

export const GroupModel = (sequelize: Sequelize) => Group.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permissions: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    {
        tableName: 'groups',
        sequelize
    }
);
