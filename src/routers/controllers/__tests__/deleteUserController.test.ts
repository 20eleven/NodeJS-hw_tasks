import { Request } from 'express';
import { User } from '../../../models/user';
import UserGroupService from '../../../services/userGroupsService';
import UserService from '../../../services/usersService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../../../utils/testsUtils';
import { deleteUserController } from '../deleteUserController';
import { mockedUserDTO as userDTO } from '../__mocks__/dtoConstants';
import { findByPkMock } from '../__mocks__/models';

describe('deleteUserController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(UserService.prototype, 'readUser').mockResolvedValueOnce({ ...userDTO, getDataValue: () => false } as unknown as User);
        jest.spyOn(UserService.prototype, 'deleteUser').mockResolvedValueOnce(userDTO as User);
        jest.spyOn(UserGroupService.prototype, 'deleteUserGroupByUserId').mockResolvedValueOnce(1);

        await deleteUserController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ message: 'User with id testId successfully deleted', deletedUser: userDTO });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should status 404 if user not found', async () => {
        jest.spyOn(UserService.prototype, 'readUser').mockResolvedValueOnce(null);

        await deleteUserController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: 'User with id testId not found' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should json message if user already deleted', async () => {
        jest.spyOn(UserService.prototype, 'readUser').mockResolvedValueOnce({ ...userDTO, getDataValue: () => true } as unknown as User);
        jest.spyOn(UserGroupService.prototype, 'deleteUserGroupByUserId').mockResolvedValueOnce(1);

        await deleteUserController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.json).toBeCalledWith({ message: 'User with id testId already deleted' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        findByPkMock.mockRejectedValue(undefined);
        await deleteUserController({ params: {} } as unknown as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
    });
});
