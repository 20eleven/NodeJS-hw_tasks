import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';

const GroupModel = db.group;

const groupServiceInstance = new GroupService(GroupModel);

export const readAllGroupController = (_: Request, res: Response) => {
    groupServiceInstance.readAllGroup()
        .then((groups) => {
            if (!groups) return res.status(404).json({ message: 'Groups not found' });

            res.status(200).send({ groups });
        })
        .catch((err) => {
            console.error(err);
            res.json({ error: err });
        });
};
