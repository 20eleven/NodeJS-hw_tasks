import { Request, Response } from 'express';
import { UserModel } from '../../models/user';
import UserService from '../../services/usersService';

const userServiceInstance = new UserService(UserModel);

export const getAutoSuggestUsersController = ({ query: { query: loginSubstring, limit } }: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    userServiceInstance.getAutoSuggestUsers(`${loginSubstring}`, +limit!)
        .then((users) => {
            res.status(200).send({ users });
        })
        .catch((err) => {
            console.error(err);
            res.json({ error: err });
        });
};
