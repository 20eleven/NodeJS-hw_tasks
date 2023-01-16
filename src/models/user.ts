import { DataTypes, Sequelize } from 'sequelize';
import { CONNECTION_STRING } from '../config';
import { UserModelType } from '../types/users';

const sequelize = new Sequelize(CONNECTION_STRING);

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));

export const UserModel = sequelize.define<UserModelType>(
    'user',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    },
    {
        tableName: 'users'
        // timestamps: false,
        // createdAt: false,
        // updatedAt: false
    }
);
