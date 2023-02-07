import { Request, Response } from 'express';
import db from '../../models';
import UserService from '../../services/usersService';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const getAutoSuggestUsersController = async ({ query: { query: loginSubstring, limit } }: Request, res: Response) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const users = await userServiceInstance.getAutoSuggestUsers(`${loginSubstring}`, +limit!);

        res.status(200).send({ users });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
