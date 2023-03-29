import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';
import { controllerErrorHandler } from '../../utils';

const GroupModel = db.group;

const groupServiceInstance = new GroupService(GroupModel);

export const updateGroupController = async ({ body: groupDTO, params: { id } }: Request, res: Response) => {
    try {
        const result = await groupServiceInstance.updateGroup(groupDTO, id);

        if (!result[0]) return res.status(404).json({ message: `Group with id ${id} not found` });

        res.status(200).send({ message: `Group ${id} updated successfully` });
    } catch (error) {
        controllerErrorHandler({
            methodName: updateGroupController.name,
            methodArguments: { body: groupDTO, params: { id } },
            error,
            res
        });
    }
};
