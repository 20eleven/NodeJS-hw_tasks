import { Request, Response } from 'express';
import { UserModel } from '../../models/user';
import UserService from '../../services/usersService';

const userServiceInstance = new UserService(UserModel);

export const deleteUserController = ({ params: { id } }: Request, res: Response) => {
    userServiceInstance.readUser(id)
        .then((user) => {
            if (!user) return res.status(404).json({ message: `User with id ${id} not found` });

            if (user.getDataValue('isDeleted')) return res.json({ message: `User with id ${id} already deleted` });

            userServiceInstance.deleteUser(user)
                .then(() => {
                    res.status(200).send({ message: `User with id ${id} successfully deleted`, user });
                })
                .catch((err) => {
                    console.error(err);
                    res.json({ error: err });
                });
        })
        .catch((err) => {
            console.error(err);
            res.json({ error: err });
        });
};
