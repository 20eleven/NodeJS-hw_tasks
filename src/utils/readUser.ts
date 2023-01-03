import { Request, Response } from 'express';
import { getUserById } from './getUser';

export const readUser = ({ params: { id } }: Request, res: Response) => {
    const user = getUserById(id);

    if (!user) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }

    res.status(200).send({ user });
};
