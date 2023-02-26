import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { envConfig } from '../../config';
import db from '../../models';
import UserService from '../../services/usersService';
import { controllerErrorHandler } from '../../utils';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const loginController = async ({ body: { userName, password }, params: { id } }: Request, res: Response) => {
    try {
        const user = await userServiceInstance.readUser(id, true);

        if (!user) return res.status(404).json({ message: `User with id ${id} not found` });
        if (user.login !== userName || user.password !== password) {
            return res.status(403).json({ message: 'Bad username / password combination' });
        }

        const token = jwt.sign({ id }, envConfig.authSecret, { expiresIn: '1h' });

        res.setHeader('x-access-token', token).send({ token });

        return token;
    } catch (error) {
        controllerErrorHandler({
            methodName: loginController.name,
            methodArguments: { params: { id } },
            error
        });
        res.json({ error });
    }
};
