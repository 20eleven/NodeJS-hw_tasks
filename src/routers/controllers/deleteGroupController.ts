import { Request, Response } from 'express';
import { GroupModel } from '../../models/group';
import GroupService from '../../services/groupsService';

const groupServiceInstance = new GroupService(GroupModel);

export const deleteGroupController = async ({ params: { id } }: Request, res: Response) => {
    try {
        const readGroup = await groupServiceInstance.readGroup(id);

        if (!readGroup) return res.status(404).json({ message: `Group with id ${id} not found` });

        await groupServiceInstance.deleteGroup(readGroup);

        res.status(200).send({ message: `Group with id ${id} successfully deleted` });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
