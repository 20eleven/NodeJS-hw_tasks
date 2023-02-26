import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const checkToken: RequestHandler = ({ headers }, res, next) => {
    const token = headers['x-access-token'];

    if (!token) return res.status(401).json({ message: 'Unauthorized Error' });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    jwt.verify(`${token}`, process.env.AUTH_SECRET!, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Forbidden Error' });

        res.json({ decoded });

        next();
    });
};
