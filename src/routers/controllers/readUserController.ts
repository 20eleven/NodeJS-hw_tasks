import { Request, Response } from 'express';
import db from '../../models';
import UserService from '../../services/usersService';
import { controllerErrorHandler } from '../../utils';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const readUserController = async ({ params: { id } }: Request, res: Response) => {
    try {
        const user = await userServiceInstance.readUser(id);

        if (!user) return res.status(404).json({ message: `User with id ${id} not found` });

        res.status(200).send({ user });
    } catch (error) {
        controllerErrorHandler({
            methodName: readUserController.name,
            methodArguments: { params: { id } },
            error,
            res
        });
    }
};
