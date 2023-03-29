import { findByPkMock } from './models';

jest.mock('sequelize', () => ({
    Sequelize: jest.fn().mockImplementation(() => ({
        authenticate: jest.fn().mockResolvedValue(''),
        define: jest.fn()
    })),
    Model: jest.fn(),
    DataTypes: jest.requireActual('sequelize').DataTypes
}));

jest.mock('../../../models/user', () => ({
    User: jest.fn(),
    UserModel: jest.fn().mockImplementation(() => ({
        belongsToMany: jest.fn(),
        findByPk: findByPkMock
    }))
}));

jest.mock('../../../models/group', () => ({
    Group: jest.fn(),
    GroupModel: jest.fn().mockImplementation(() => ({
        belongsToMany: jest.fn()
    }))
}));

jest.mock('../../../utils', () => ({
    ...jest.requireActual('../../../utils'),
    controllerErrorHandler: jest.fn()
}));
