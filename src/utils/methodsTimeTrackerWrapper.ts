import { RequestHandler, Response } from 'express';
import { AnyFunction } from 'sequelize/types/utils';
import { winston } from './winston';

export const controllerExecutionTimeLogger = (controller: RequestHandler & AnyFunction) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any) => {
        const startTime = new Date();
        const res = args[1] as Response;

        res.on('finish', () => {
            const endTime = new Date();
            const responseTime = (endTime.getTime() - startTime.getTime()) / 1000;

            winston.log('info', controller.name, { ['execution time']: responseTime });
        });

        return controller(...args);
    };
};
