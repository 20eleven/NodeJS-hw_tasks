import express, { Application } from 'express';
import { DataTypes, Sequelize } from 'sequelize';
import {
    createUser,
    deleteUserById,
    updateUser,
    readUser,
    getAutoSuggestUsers,
    validateSchema,
    schema
} from './utils';

const app: Application = express();
const router = express.Router();
const PORT = process.env.PORT || 8000;
const connectionString = 'postgres://ikbppeeu:3oQRn_z8glyQt-sktxc82c8i5-wth4Qf@mel.db.elephantsql.com/ikbppeeu';
const sequelize = new Sequelize(connectionString);

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));


export const User = sequelize.define(
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
    }
);

app
    .use(express.json())
    .use('/users', router);

router
    .post('/create', validateSchema(schema), createUser)
    .get('/read/:id', readUser)
    .put('/update/:id', validateSchema(schema), updateUser)
    .delete('/delete/:id', deleteUserById)
    .get('/find', getAutoSuggestUsers);

app.listen(PORT);
