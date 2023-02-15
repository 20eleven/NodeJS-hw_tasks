import { winston } from './winston';

type ErrorHandlerType = {
  methodName: string;
  methodArguments?: unknown;
  error: unknown;
};

export const controllerErrorHandler = ({ methodName, methodArguments, error }: ErrorHandlerType) => {
    winston.error(methodName, {
        error,
        arguments: methodArguments
    });
};
