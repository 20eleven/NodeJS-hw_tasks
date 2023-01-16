import { Request, Response } from 'express';
import { UserModel } from '../../models/user';
import UserService from '../../services/usersService';

const userServiceInstance = new UserService(UserModel);

export const getAutoSuggestUsersController = ({ query: { query: loginSubstring, limit } }: Request, res: Response) => {
    if (!loginSubstring) return res.json({ message: 'Login substring query is not defined' });

    if (!limit) return res.json({ message: 'Limit is not defined' });

    userServiceInstance.getAutoSuggestUsers(`${loginSubstring}`, +limit)
        .then((users) => {
            res.status(200).send({ users });
        })
        .catch((err) => {
            console.error(err);
            res.json({ error: err });
        });
};
