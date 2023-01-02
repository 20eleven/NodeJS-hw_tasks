import { Request, Response } from 'express';
import { users } from '../data/usersDB';

export const getAutoSuggestUsers = ({ query: { query: loginSubstring, limit } }: Request, res: Response) => {
    if (!loginSubstring) {
        return res.json({ message: 'Login substring is not defined' });
    }
    if (!limit) {
        return res.json({ message: 'Limit is not defined' });
    }

    const clonedUsers = users.map((user) => ({ ...user }));

    const sortedUsers = clonedUsers.sort(({ login: loginA }, { login: loginB }) => {
        if (loginA < loginB) return -1;
        if (loginA > loginB) return 1;
        return 0;
    });

    const filteredUsers = sortedUsers.filter((user) => user.login.indexOf(`${loginSubstring}`) !== -1);

    const usersData = filteredUsers.length <= +limit
        ? filteredUsers
        : filteredUsers.slice(0, +limit);

    res.status(200).send(usersData);
};
