import { Request } from 'express';
import { Group } from '../../../models/group';
import GroupService from '../../../services/groupsService';
import UserGroupService from '../../../services/userGroupsService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../__mocks__/express';
import { deleteGroupController } from '../deleteGroupController';
import { mockedGroupDTO as groupDTO, mockedUserGroup } from '../__mocks__/dtoConstants';

describe('deleteGroupController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(GroupService.prototype, 'readGroup').mockResolvedValueOnce({ ...groupDTO, destroy: jest.fn() } as unknown as Group);
        jest.spyOn(GroupService.prototype, 'deleteGroup');
        jest.spyOn(UserGroupService.prototype, 'readUserGroupByGroupId').mockResolvedValueOnce(mockedUserGroup);
        jest.spyOn(UserGroupService.prototype, 'deleteUserGroupByGroupId').mockResolvedValueOnce(1);

        await deleteGroupController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ message: 'Group with id testId successfully deleted' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should status 404 if group not found', async () => {
        jest.spyOn(GroupService.prototype, 'readGroup').mockResolvedValueOnce(null);

        await deleteGroupController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: 'Group with id testId not found' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        await deleteGroupController({ params: {} } as unknown as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
    });
});
