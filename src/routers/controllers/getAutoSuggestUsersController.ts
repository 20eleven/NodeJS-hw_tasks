import { Request, Response } from 'express';
import db from '../../models';
import UserService from '../../services/usersService';
import { controllerErrorHandler } from '../../utils';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const getAutoSuggestUsersController = async ({ query: { query: loginSubstring, limit } }: Request, res: Response) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const users = await userServiceInstance.getAutoSuggestUsers(`${loginSubstring}`, +limit!);

        res.status(200).send({ users });
    } catch (error) {
        controllerErrorHandler({
            methodName: getAutoSuggestUsersController.name,
            methodArguments: { query: { query: loginSubstring, limit } },
            error,
            res
        });
    }
};
