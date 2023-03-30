import { Response } from 'express';

export const mockedRes = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
    json: jest.fn()
} as unknown as Response;
