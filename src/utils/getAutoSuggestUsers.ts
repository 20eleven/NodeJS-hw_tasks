import { Request, Response } from 'express';
import { users } from '../data/usersDB';

export const getAutoSuggestUsers = ({ query: { query: loginSubstring, limit } }: Request, res: Response) => {
    if (!loginSubstring) {
        return res.json({ message: 'Login substring is not defined' });
    }
    if (!limit) {
        return res.json({ message: 'Limit is not defined' });
    }

    const foundUsers = users
        .filter(({ login }) => login.indexOf(`${loginSubstring}`) !== -1)
        .slice(0, +limit)
        .sort(({ login: loginA }, { login: loginB }) => {
            if (loginA < loginB) return -1;
            if (loginA > loginB) return 1;
            return 0;
        });

    res.status(200).send(foundUsers);
};
