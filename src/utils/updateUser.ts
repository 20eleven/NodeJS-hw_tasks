import { Request, Response } from 'express';
import { User } from '..';

export const updateUser = ({ body, params: { id } }: Request, res: Response) => {
    User.findByPk(id)
        .then(user => {
            if (!user) return res.status(404).json({ message: `User with id ${id} not found` });

            user.update(body).then(() => {
                res.status(200).send({ message: `User ${id} updated successfully`, user });
            });
        })
        .catch(err => {
            console.error(err);
        });
};
