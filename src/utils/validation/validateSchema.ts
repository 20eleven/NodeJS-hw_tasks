import { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { errorResponse } from './errorsMapping';

export const validateSchema = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, {
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
