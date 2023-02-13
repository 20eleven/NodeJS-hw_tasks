import { Request, Response } from 'express';
import db from '../../models';
import UserGroupService from '../../services/userGroupsService';
import UserService from '../../services/usersService';

const { user: UserModel, userGroup: UserGroupModel } = db;

const userServiceInstance = new UserService(UserModel);
const userGroupServiceInstance = new UserGroupService(UserGroupModel);

export const deleteUserController = async ({ params: { id } }: Request, res: Response) => {
    try {
        const readUser = await userServiceInstance.readUser(id);

        if (!readUser) return res.status(404).json({ message: `User with id ${id} not found` });

        if (readUser.getDataValue('isDeleted')) return res.json({ message: `User with id ${id} already deleted` });

        const deletedUser = await userServiceInstance.deleteUser(readUser);

        // since soft user deletion, so there is no need to check if user_group rows exist
        await userGroupServiceInstance.deleteUserGroupByUserId(id);

        res.status(200).send({ message: `User with id ${id} successfully deleted`, deletedUser });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
