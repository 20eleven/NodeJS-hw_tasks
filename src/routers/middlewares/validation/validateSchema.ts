import { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { errorResponse } from './errorsMapping';

export const validateUserSchema = (schema: ObjectSchema) => {
    return ({ body }: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(body, {
            abortEarly: false,
            allowUnknown: false
        });

        if (error && error.isJoi) {
            res.status(400).json(errorResponse(error.details));
        } else {
            return next();
        }
    };
};

export const validateQuerySchema = (schema: ObjectSchema) => {
    return ({ query }: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(query, {
            abortEarly: false,
            allowUnknown: false
        });

        if (error && error.isJoi) {
            res.status(400).json(errorResponse(error.details));
        } else {
            return next();
        }
    };
};
