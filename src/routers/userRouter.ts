import express from 'express';
import { schema, validateSchema } from './middlewares';
import {
    createUserController,
    readUserController,
    updateUserController,
    deleteUserController,
    getAutoSuggestUsersController
} from './controllers';

const router = express.Router();

export default router
    .post('/create', validateSchema(schema), createUserController)
    .get('/read/:id', readUserController)
    .put('/update/:id', validateSchema(schema), updateUserController)
    .delete('/delete/:id', deleteUserController)
    .get('/find', getAutoSuggestUsersController);
