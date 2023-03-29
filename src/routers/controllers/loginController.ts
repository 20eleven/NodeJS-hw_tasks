import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { envConfig } from '../../config';
import db from '../../models';
import UserService from '../../services/usersService';
import { controllerErrorHandler } from '../../utils';

const UserModel = db.user;

const userServiceInstance = new UserService(UserModel);

export const loginController = async ({ body: { userName, password } }: Request, res: Response) => {
    try {
        const user = await userServiceInstance.readUserByLogin(userName);

        if (!user || user.login !== userName || user.password !== password) {
            return res.status(403).json({ message: "Your username or password doesn't match" });
        }

        const token = jwt.sign({ id: user.id }, envConfig.authSecret, { expiresIn: '1h' });

        res.send({ token });

        return token;
    } catch (error) {
        controllerErrorHandler({
            methodName: loginController.name,
            methodArguments: { body: { userName } },
            error,
            res
        });
    }
};
