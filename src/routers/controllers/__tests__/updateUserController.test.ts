import { Request } from 'express';
import UserService from '../../../services/usersService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../../../utils/testsUtils';
import { updateUserController } from '../updateUserController';
import { mockedUserDTO as userDTO } from '../__mocks__/dtoConstants';

describe('updateUserController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(UserService.prototype, 'updateUser').mockResolvedValueOnce([1]);
        await updateUserController({ body: userDTO, params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ message: 'User testId updated successfully' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should status 404 if there is no such user', async () => {
        jest.spyOn(UserService.prototype, 'updateUser').mockResolvedValueOnce([0]);
        await updateUserController({ body: userDTO, params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: 'User with id testId not found' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        await updateUserController({ params: {} } as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
        expect(res.json).toBeCalled();
    });
});
