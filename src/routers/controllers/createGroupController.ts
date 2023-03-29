import { Request, Response } from 'express';
import db from '../../models';
import GroupService from '../../services/groupsService';
import { controllerErrorHandler } from '../../utils';

const GroupModel = db.group;

const groupServiceInstance = new GroupService(GroupModel);

export const createGroupController = async ({ body: groupDTO }: Request, res: Response) => {
    try {
        await groupServiceInstance.createGroup(groupDTO);

        res.status(200).send({ message: `Group ${groupDTO.id} created successfully` });
    } catch (error) {
        controllerErrorHandler({
            methodName: createGroupController.name,
            methodArguments: { body: groupDTO },
            error,
            res
        });
    }
};
