import { ValidationErrorItem } from 'joi';

export const errorResponse = (schemaErrors: ValidationErrorItem[]) => {
    const errors = schemaErrors.map(({ path, message }) => ({ path, message }));

    return {
        status: 'validation failed',
        errors
    };
};
