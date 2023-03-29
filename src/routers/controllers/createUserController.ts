import { Request, Response } from 'express';
import db from '../../models';
import UserService from '../../services/usersService';
import { controllerErrorHandler } from '../../utils';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const createUserController = async ({ body: userDTO }: Request, res: Response) => {
    try {
        await userServiceInstance.createUser(userDTO);

        res.status(200).send({ message: `User ${userDTO.id} created successfully` });
    } catch (error) {
        controllerErrorHandler({
            methodName: createUserController.name,
            methodArguments: { body: userDTO },
            error,
            res
        });
    }
};
