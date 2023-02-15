import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';
import UserGroupService from '../../services/userGroupsService';
import UserService from '../../services/usersService';
import { controllerErrorHandler } from '../../utils';

const { user: UserModel, group: GroupModel } = db;

const userServiceInstance = new UserService(UserModel);
const groupServiceInstance = new GroupService(GroupModel);
const userGroupServiceInstance = new UserGroupService();

export const addUsersToGroupController = async ({ params: { groupId }, body: { userIds } }: Request, res: Response) => {
    try {
        const [readGroup, readUsers] = await Promise.all([
            groupServiceInstance.readGroup(groupId),
            userServiceInstance.readUsers(userIds)
        ]);

        if (!readGroup) return res.status(404).json({ message: `Group with id ${groupId} not found` });
        if (!readUsers) return res.status(404).json({ message: `Users with ids ${userIds.join(', ')} not found` });

        userGroupServiceInstance.addUsersToGroup(readGroup, readUsers);

        res.status(200).send({ message: `Added user ids ${userIds.join(', ')} to group id ${groupId}` });
    } catch (error) {
        controllerErrorHandler({
            methodName: addUsersToGroupController.name,
            methodArguments: { params: { groupId }, body: { userIds } },
            error
        });
        res.json({ error });
    }
};
