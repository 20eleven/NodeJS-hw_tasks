import { NextFunction, Request, Response } from 'express';
import { isEmptyObj, logger } from '../../utils';

export const logServiceMethod = (
    { method, url, body, query, params }: Request,
    _: Response,
    next: NextFunction
) => {
    logger('logServiceMethod', {
        [method]: url,
        ...(!isEmptyObj(body) && { body }),
        ...(!isEmptyObj(query) && { query }),
        ...(!isEmptyObj(params) && { params })
    });

    next();
};
