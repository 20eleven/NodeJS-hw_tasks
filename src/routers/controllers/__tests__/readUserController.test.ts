import { Request } from 'express';
import { User } from '../../../models/user';
import UserService from '../../../services/usersService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../../../utils/testsUtils';
import { readUserController } from '../readUserController';
import { mockedUserDTO as userDTO } from '../__mocks__/dtoConstants';

describe('readUserController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(UserService.prototype, 'readUser').mockResolvedValueOnce(userDTO as User);
        await readUserController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ user: userDTO });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should status 404 if there is no user', async () => {
        jest.spyOn(UserService.prototype, 'readUser').mockResolvedValueOnce(null);
        await readUserController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: 'User with id testId not found' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        await readUserController({ params: {} } as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
        expect(res.json).toBeCalled();
    });
});
