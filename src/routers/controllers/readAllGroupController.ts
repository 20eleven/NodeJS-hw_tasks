import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';

const GroupModel = db.group;

const groupServiceInstance = new GroupService(GroupModel);

export const readAllGroupController = async (_: Request, res: Response) => {
    try {
        const groups = await groupServiceInstance.readAllGroup();

        if (!groups) return res.status(404).json({ message: 'Groups not found' });

        res.status(200).send({ groups });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
