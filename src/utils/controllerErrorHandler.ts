import { Response } from 'express';
import { winston } from './winston';

type ErrorHandlerType = {
    methodName: string;
    methodArguments?: unknown;
    error: unknown;
    res: Response;
};

export const controllerErrorHandler = ({ methodName, methodArguments, error, res }: ErrorHandlerType) => {
    winston.error(methodName, {
        error,
        arguments: methodArguments
    });

    return res.status(400).send({ error });
};
