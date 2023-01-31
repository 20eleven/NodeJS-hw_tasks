import { Request, Response } from 'express';
import { GroupModel } from '../../models/group';
import GroupService from '../../services/groupsService';

const groupServiceInstance = new GroupService(GroupModel);

export const createGroupController = ({ body: groupDTO }: Request, res: Response) => {
    groupServiceInstance.createGroup(groupDTO)
        .then(() => res.status(200).send({ message: `Group ${groupDTO.id} created successfully` }))
        .catch((err) => {
            console.error(err);
            res.json({ error: err });
        });
};
