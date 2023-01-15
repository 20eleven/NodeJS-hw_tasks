import { Request, Response } from 'express';
import { User } from '..';

export const readUser = ({ params: { id } }: Request, res: Response) => {
    User.findByPk(id)
        .then(user => {
            if (!user) return res.status(404).json({ message: `User with id ${id} not found` });

            res.status(200).send({ user });
        })
        .catch(err => {
            console.error(err);
        });
};
