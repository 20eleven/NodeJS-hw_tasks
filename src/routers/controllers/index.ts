import { controllerExecutionTimeLogger } from '../../utils';

import { createUserController as createUser } from './createUserController';
import { readUserController as readUser } from './readUserController';
import { updateUserController as updateUser } from './updateUserController';
import { deleteUserController as deleteUser } from './deleteUserController';
import { getAutoSuggestUsersController as getAutoSuggestUsers } from './getAutoSuggestUsersController';
import { createGroupController as createGroup } from './createGroupController';
import { readGroupController as readGroup } from './readGroupController';
import { readAllGroupController as readAllGroup } from './readAllGroupController';
import { updateGroupController as updateGroup } from './updateGroupController';
import { deleteGroupController as deleteGroup } from './deleteGroupController';
import { addUsersToGroupController as addUsersToGroup } from './addUsersToGroupController';

export const createUserController = controllerExecutionTimeLogger(createUser);
export const readUserController = controllerExecutionTimeLogger(readUser);
export const updateUserController = controllerExecutionTimeLogger(updateUser);
export const deleteUserController = controllerExecutionTimeLogger(deleteUser);
export const getAutoSuggestUsersController = controllerExecutionTimeLogger(getAutoSuggestUsers);
export const createGroupController = controllerExecutionTimeLogger(createGroup);
export const readGroupController = controllerExecutionTimeLogger(readGroup);
export const readAllGroupController = controllerExecutionTimeLogger(readAllGroup);
export const updateGroupController = controllerExecutionTimeLogger(updateGroup);
export const deleteGroupController = controllerExecutionTimeLogger(deleteGroup);
export const addUsersToGroupController = controllerExecutionTimeLogger(addUsersToGroup);
