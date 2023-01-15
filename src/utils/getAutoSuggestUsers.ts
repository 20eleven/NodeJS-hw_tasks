import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '..';

export const getAutoSuggestUsers = ({ query: { query: loginSubstring, limit } }: Request, res: Response) => {
    if (!loginSubstring) {
        return res.json({ message: 'Login substring query is not defined' });
    }
    if (!limit) {
        return res.json({ message: 'Limit is not defined' });
    }

    User.findAll({
        where: {
            login: { [Op.iLike]: `${loginSubstring}%` }
        },
        limit: +limit
    }).then(users => {
        res.status(200).send({ users });
    }).catch(err => {
        console.error(err);
    });
};
