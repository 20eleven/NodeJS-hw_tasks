import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';

const GroupModel = db.group;

const groupServiceInstance = new GroupService(GroupModel);

export const readGroupController = async ({ params: { id } }: Request, res: Response) => {
    try {
        const group = await groupServiceInstance.readGroup(id);

        if (!group) return res.status(404).json({ message: `Group with id ${id} not found` });

        res.status(200).send({ group });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
