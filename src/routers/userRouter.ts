import express from 'express';
import {
    querySchema,
    userSchema,
    validateQuerySchema,
    validateUserSchema,
    checkToken
} from './middlewares';
import {
    createUserController,
    readUserController,
    updateUserController,
    deleteUserController,
    getAutoSuggestUsersController,
    loginController
} from './controllers';

const router = express.Router();

export default router
    .post('/create', validateUserSchema(userSchema), createUserController)
    .get('/read/:id', checkToken, readUserController)
    .put('/update/:id', checkToken, validateUserSchema(userSchema), updateUserController)
    .delete('/delete/:id', checkToken, deleteUserController)
    .get('/find', checkToken, validateQuerySchema(querySchema), getAutoSuggestUsersController)
    .post('/auth', loginController);
