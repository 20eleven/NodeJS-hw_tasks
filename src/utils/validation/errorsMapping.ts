import { ValidationErrorItem } from 'joi';

export const errorResponse = (schemaErrors: ValidationErrorItem[]) => {
    const errors = schemaErrors.map((error) => {
        const { path, message } = error;

        return { path, message };
    });

    return {
        status: 'validation failed',
        errors
    };
};
