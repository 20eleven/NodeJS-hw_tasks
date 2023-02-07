import { Request, Response } from 'express';
import db from '../../models';
import UserService from '../../services/usersService';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const createUserController = async ({ body: userDTO }: Request, res: Response) => {
    try {
        await userServiceInstance.createUser(userDTO);

        res.status(200).send({ message: `User ${userDTO.id} created successfully` });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
