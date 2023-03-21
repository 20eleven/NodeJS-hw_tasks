import { Request } from 'express';
import { User } from '../../../models/user';
import UserService from '../../../services/usersService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../../../utils/testsUtils';
import { createUserController } from '../createUserController';
import { mockedUserDTO as userDTO } from '../__mocks__/dtoConstants';

describe('createUserController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(UserService.prototype, 'createUser').mockResolvedValueOnce(userDTO as User);
        await createUserController({ body: userDTO } as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ message: 'User testId created successfully' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        await createUserController({ body: {} } as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
        expect(res.json).toBeCalled();
    });
});
