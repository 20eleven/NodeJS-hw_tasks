import { Request, Response } from 'express';
import { User } from '..';

export const updateUser = ({ body, params: { id } }: Request, res: Response) => {
    User.update(
        body,
        {
            where: { id }
        }
    ).then((result) => {
        if (!result[0]) return res.status(404).json({ message: `User with id ${id} not found` });

        res.status(200).send({ message: `User ${id} updated successfully` });
    }).catch((err) => {
        console.error(err);
        res.json({ error: err });
    });
};
