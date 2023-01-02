import { v4 as uuid4 } from 'uuid';
import { Request, Response } from 'express';
import { users } from '../data/usersDB';

export const createUser = ({ body }: Request, res: Response) => {
    // TODO: other fields
    body.id = uuid4();
    body.isDeleted = false;

    users.push(body);

    res.status(200).send({ message: 'User created successfully' });
};
