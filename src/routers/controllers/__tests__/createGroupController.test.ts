import { Request } from 'express';
import GroupService from '../../../services/groupsService';
import { controllerErrorHandler } from '../../../utils';
import { mockedRes as res } from '../__mocks__/express';
import { createGroupController } from '../createGroupController';
import { mockedGroupDTO as groupDTO } from '../__mocks__/dtoConstants';

describe('createGroupController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should status 200 and send correct value', async () => {
        jest.spyOn(GroupService.prototype, 'createGroup').mockResolvedValueOnce(groupDTO);
        await createGroupController({ body: groupDTO } as Request, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith({ message: 'Group testId created successfully' });
        expect(controllerErrorHandler as jest.Mock).not.toBeCalled();
    });

    it('should catch error', async () => {
        await createGroupController({ body: {} } as Request, res);

        expect(controllerErrorHandler as jest.Mock).toBeCalled();
    });
});
