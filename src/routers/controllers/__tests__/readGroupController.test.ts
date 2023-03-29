import { Request } from 'express';
import GroupService from '../../../services/groupsService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../../../utils/testsUtils';
import { readGroupController } from '../readGroupController';
import { mockedGroupDTO as groupDTO } from '../__mocks__/dtoConstants';

describe('readGroupController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(GroupService.prototype, 'readGroup').mockResolvedValueOnce(groupDTO);
        await readGroupController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ group: groupDTO });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should status 404 if there is no user', async () => {
        jest.spyOn(GroupService.prototype, 'readGroup').mockResolvedValueOnce(null);
        await readGroupController({ params: { id: 'testId' } } as unknown as Request, res);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: 'Group with id testId not found' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        await readGroupController({ params: {} } as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
    });
});
