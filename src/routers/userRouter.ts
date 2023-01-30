import express from 'express';
import { querySchema, userSchema, validateQuerySchema, validateUserSchema } from './middlewares';
import {
    createUserController,
    readUserController,
    updateUserController,
    deleteUserController,
    getAutoSuggestUsersController
} from './controllers';

const router = express.Router();

export default router
    .post('/create', validateUserSchema(userSchema), createUserController)
    .get('/read/:id', readUserController)
    .put('/update/:id', validateUserSchema(userSchema), updateUserController)
    .delete('/delete/:id', deleteUserController)
    .get('/find', validateQuerySchema(querySchema), getAutoSuggestUsersController);
