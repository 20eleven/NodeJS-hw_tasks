import { Request, Response } from 'express';
import db from '../../models';
import UserService from '../../services/usersService';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const updateUserController = async ({ body: userDTO, params: { id } }: Request, res: Response) => {
    try {
        const result = await userServiceInstance.updateUser(userDTO, id);

        if (!result[0]) return res.status(404).json({ message: `User with id ${id} not found` });

        res.status(200).send({ message: `User ${id} updated successfully` });
    } catch (error) {
        console.error(error);
        res.json({ error });
    }
};
