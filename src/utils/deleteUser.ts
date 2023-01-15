import { Request, Response } from 'express';
import { User } from '..';

export const deleteUserById = ({ params: { id } }: Request, res: Response) => {
    User.findByPk(id)
        .then(user => {
            if (!user) return res.status(404).json({ message: `User with id ${id} not found` });

            // if (user.isDeleted) return res.json({ message: `User with id ${id} already deleted` });

            user.update({ isDeleted: true }).then(() => {
                res.status(200).send({ message: `User with id ${id} successfully deleted`, user });
            });
        })
        .catch(err => {
            console.error(err);
        });
};
