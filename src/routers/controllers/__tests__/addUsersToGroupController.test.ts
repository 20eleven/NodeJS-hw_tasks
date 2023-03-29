import { Request } from 'express';
import { User } from '../../../models/user';
import GroupService from '../../../services/groupsService';
import UserGroupService from '../../../services/userGroupsService';
import UserService from '../../../services/usersService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../../../utils/testsUtils';
import { addUsersToGroupController } from '../addUsersToGroupController';
import { mockedUserDTO as userDTO, mockedGroupDTO as groupDTO } from '../__mocks__/dtoConstants';

describe('addUsersToGroupController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(GroupService.prototype, 'readGroup').mockResolvedValue(groupDTO);
        jest.spyOn(UserService.prototype, 'readUsers').mockResolvedValue([userDTO, { ...userDTO, id: 'testId2' }] as User[]);
        jest.spyOn(UserGroupService.prototype, 'addUsersToGroup').mockImplementation(() => Promise.resolve());

        await addUsersToGroupController({ params: { groupId: 'testId' }, body: { userIds: ['testId', 'testId2'] } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ message: 'Added user ids testId, testId2 to group id testId' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should status 404 if group not found', async () => {
        jest.spyOn(GroupService.prototype, 'readGroup').mockResolvedValue(null);
        jest.spyOn(UserService.prototype, 'readUsers').mockResolvedValue([userDTO] as User[]);
        await addUsersToGroupController({ params: { groupId: 'testId' }, body: { userIds: ['testId'] } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: 'Group with id testId not found' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should status 404 if users not found', async () => {
        jest.spyOn(GroupService.prototype, 'readGroup').mockResolvedValue(groupDTO);
        jest.spyOn(UserService.prototype, 'readUsers').mockResolvedValue(undefined as unknown as User[]);
        await addUsersToGroupController({ params: { groupId: 'testId' }, body: { userIds: ['testId'] } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: 'Users with ids testId not found' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        await addUsersToGroupController({ params: {}, body: {} } as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
    });
});
