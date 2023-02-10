import express from 'express';
import { addUsersToGroupController } from './controllers';

const router = express.Router();

export default router.post('/:groupId', addUsersToGroupController);
