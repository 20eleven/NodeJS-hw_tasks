import { Request, Response } from 'express';
import { GroupModel } from '../../models/group';
import GroupService from '../../services/groupsService';

const groupServiceInstance = new GroupService(GroupModel);

export const readGroupController = ({ params: { id } }: Request, res: Response) => {
    groupServiceInstance.readGroup(id)
        .then((group) => {
            if (!group) return res.status(404).json({ message: `Group with id ${id} not found` });

            res.status(200).send({ group });
        })
        .catch((err) => {
            console.error(err);
            res.json({ error: err });
        });
};
