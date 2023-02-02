import { Request, Response } from 'express';
import db from '../../models';
import UserService from '../../services/usersService';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const readUserController = ({ params: { id } }: Request, res: Response) => {
    userServiceInstance.readUser(id)
        .then((user) => {
            if (!user) return res.status(404).json({ message: `User with id ${id} not found` });

            res.status(200).send({ user });
        })
        .catch((err) => {
            console.error(err);
            res.json({ error: err });
        });
};
