import { Request, Response } from 'express';
import db from '../../models';
import UserService from '../../services/usersService';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const createUserController = ({ body: userDTO }: Request, res: Response) => {
    userServiceInstance.createUser(userDTO)
        .then(() => res.status(200).send({ message: `User ${userDTO.id} created successfully` }))
        .catch((err) => {
            console.error(err);
            res.json({ error: err });
        });
};
