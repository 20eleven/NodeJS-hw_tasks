import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';
import UserGroupService from '../../services/userGroupsService';

const { group: GroupModel, userGroup: UserGroupModel } = db;

const groupServiceInstance = new GroupService(GroupModel);
const userGroupServiceInstance = new UserGroupService(UserGroupModel);

export const deleteGroupController = async ({ params: { id } }: Request, res: Response) => {
    try {
        const readGroup = await groupServiceInstance.readGroup(id);

        if (!readGroup) return res.status(404).json({ message: `Group with id ${id} not found` });

        await groupServiceInstance.deleteGroup(readGroup);

        const readUserGroup = await userGroupServiceInstance.readUserGroupByGroupId(id);

        if (readUserGroup) await userGroupServiceInstance.deleteUserGroupByGroupId(id);

        res.status(200).send({ message: `Group with id ${id} successfully deleted` });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
