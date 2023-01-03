import Joi from 'joi';

export const schema = Joi.object().keys({
    login: Joi.string()
        .required(),
    password: Joi.string()
        .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
        .required(),
    age: Joi.number()
        .min(4)
        .max(130)
        .required()
});
