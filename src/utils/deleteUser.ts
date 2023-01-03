import { Request, Response } from 'express';
import { getUserById } from './getUser';

export const deleteUserById = ({ params: { id } }: Request, res: Response) => {
    const userById = getUserById(id);

    if (userById === undefined) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }
    if (userById.isDeleted === true) {
        return res.json({ message: `User with id ${id} already deleted` });
    }

    userById.isDeleted = true;

    res.status(200).send({ message: `User with id ${id} successfully deleted` });
};
