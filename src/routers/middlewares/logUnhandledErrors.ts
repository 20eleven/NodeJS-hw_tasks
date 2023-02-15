import { ErrorRequestHandler } from 'express';
import { winston } from '../../utils';

export const logUnhandledErrors: ErrorRequestHandler = (error, req, res, next) => {
    if (!req.xhr || res.headersSent) return next(error);

    winston.log('error', { error });
    res.status(500).json({ message: 'Internal Server Error' });
};
