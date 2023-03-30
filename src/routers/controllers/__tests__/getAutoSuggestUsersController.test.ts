import { Request } from 'express';
import { User } from '../../../models/user';
import UserService from '../../../services/usersService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../__mocks__/express';
import { getAutoSuggestUsersController } from '../getAutoSuggestUsersController';
import { mockedUserDTO as userDTO } from '../__mocks__/dtoConstants';

describe('getAutoSuggestUsersController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(UserService.prototype, 'getAutoSuggestUsers').mockResolvedValueOnce([userDTO, userDTO] as User[]);
        await getAutoSuggestUsersController({ query: { query: 'test', limit: 2 } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ users: [userDTO, userDTO] });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        await getAutoSuggestUsersController({ query: {} } as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
    });
});
