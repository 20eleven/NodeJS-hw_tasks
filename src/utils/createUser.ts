import { v4 as uuid4 } from 'uuid';
import { Request, Response } from 'express';
import { User } from '..';

export const createUser = async ({ body }: Request, res: Response) => {
    body.id = uuid4();
    body.isDeleted = false;

    try {
        await User.create(body);
        res.status(200).send({ message: `User ${body.id} created successfully` });
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
};
