import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';

const GroupModel = db.group;

const groupServiceInstance = new GroupService(GroupModel);

export const updateGroupController = async ({ body: groupDTO, params: { id } }: Request, res: Response) => {
    try {
        const result = await groupServiceInstance.updateGroup(groupDTO, id);

        if (!result[0]) return res.status(404).json({ message: `Group with id ${id} not found` });

        res.status(200).send({ message: `Group ${id} updated successfully` });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
