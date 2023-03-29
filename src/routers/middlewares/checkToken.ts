import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { envConfig } from '../../config';

export const checkToken: RequestHandler = (req, res, next) => {
    const token = req.header('authorization');

    if (!token) return res.status(401).json({ message: 'Unauthorized Error' });

    jwt.verify(`${token}`, envConfig.authSecret, (err) => {
        if (err) return res.status(403).json({ message: 'Forbidden Error' });

        next();
    });
};
