import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { envConfig } from '../../config';

export const checkToken: RequestHandler = ({ headers }, res, next) => {
    const token = headers['x-access-token'];

    if (!token) return res.status(401).json({ message: 'Unauthorized Error' });

    jwt.verify(`${token}`, envConfig.authSecret, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Forbidden Error' });

        res.json({ decoded });

        next();
    });
};
