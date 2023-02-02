import { Sequelize } from 'sequelize';
import { DbType } from '../types/db';
import { GroupModel } from './group';
import { UserModel } from './user';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const sequelize = new Sequelize(process.env.CONNECTION_STRING!);

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));

const db: DbType = {
    sequelize,
    user: UserModel(sequelize),
    group: GroupModel(sequelize)
};

db.user.belongsToMany(db.group, {
    through: 'UserGroups',
    foreignKey: 'usersId'
});
db.group.belongsToMany(db.user, {
    through: 'UserGroups',
    foreignKey: 'groupsId'
});

export default db;
