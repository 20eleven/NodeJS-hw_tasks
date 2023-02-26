import { DataTypes, Sequelize } from 'sequelize';
import { DbType } from '../types/db';
import { GroupModel } from './group';
import { UserModel } from './user';
import env from '../config/envConfig';

const sequelize = new Sequelize(env.connectionString);

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));

const db: DbType = {
    sequelize,
    user: UserModel(sequelize),
    group: GroupModel(sequelize),
    userGroup: undefined
};

const UserGroups = sequelize.define('UserGroups', {
    usersId: {
        type: DataTypes.UUID,
        references: {
            model: db.group,
            key: 'id'
        }
    },
    groupsId: {
        type: DataTypes.UUID,
        references: {
            model: db.user,
            key: 'id'
        }
    }
});

db.user.belongsToMany(db.group, {
    through: UserGroups,
    foreignKey: 'usersId'
});
db.group.belongsToMany(db.user, {
    through: UserGroups,
    foreignKey: 'groupsId'
});

db.userGroup = UserGroups;

export default db;
