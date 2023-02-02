import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';
import UserGroupService from '../../services/userGroupsService';
import UserService from '../../services/usersService';

const { user: UserModel, group: GroupModel } = db;

const userServiceInstance = new UserService(UserModel);
const groupServiceInstance = new GroupService(GroupModel);
const userGroupServiceInstance = new UserGroupService();

export const addUsersToGroupController = async ({ body: { userId, groupId } }: Request, res: Response) => {
    try {
        const [readGroup, readUser] = await Promise.all([
            groupServiceInstance.readGroup(groupId),
            userServiceInstance.readUser(userId)
        ]);

        if (!readGroup) return res.status(404).json({ message: `Group with id ${groupId} not found` });
        if (!readUser) return res.status(404).json({ message: `User with id ${userId} not found` });

        userGroupServiceInstance.addUsersToGroup(readGroup, readUser);

        res.status(200).send({ message: `Added user id ${userId} to group id ${groupId}` });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
