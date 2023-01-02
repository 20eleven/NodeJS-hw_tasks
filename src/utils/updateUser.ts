import { Request, Response } from 'express';
import { getUserById } from './getUser';

export const updateUser = ({ body, params: { id } }: Request, res: Response) => {
    const userById = getUserById(id);

    if (userById === undefined) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }

    Object.assign(userById, body);

    res.status(200).send({ message: 'User Updated successfully' });
};
