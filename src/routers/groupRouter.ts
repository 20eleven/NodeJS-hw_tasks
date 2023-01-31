import express from 'express';
import {
    createGroupController,
    readGroupController,
    readAllGroupController,
    updateGroupController,
    deleteGroupController
} from './controllers';

const router = express.Router();

export default router
    .post('/create', createGroupController)
    .get('/read/:id', readGroupController)
    .get('/read', readAllGroupController)
    .put('/update/:id', updateGroupController)
    .delete('/delete/:id', deleteGroupController);
