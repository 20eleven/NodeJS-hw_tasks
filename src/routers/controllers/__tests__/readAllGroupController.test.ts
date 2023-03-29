import { Request } from 'express';
import { Group } from '../../../models/group';
import GroupService from '../../../services/groupsService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../../../utils/testsUtils';
import { readAllGroupController } from '../readAllGroupController';
import { mockedGroupDTO as groupDTO } from '../__mocks__/dtoConstants';

describe('readAllGroupController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(GroupService.prototype, 'readAllGroup').mockResolvedValueOnce([groupDTO, groupDTO]);
        await readAllGroupController({} as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ groups: [groupDTO, groupDTO] });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should status 404 if there is no such groups', async () => {
        jest.spyOn(GroupService.prototype, 'readAllGroup').mockResolvedValueOnce(null as unknown as Group[]);
        await readAllGroupController({} as Request, res);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: 'Groups not found' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        jest.spyOn(GroupService.prototype, 'readAllGroup').mockRejectedValue(undefined);
        await readAllGroupController({} as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
    });
});
