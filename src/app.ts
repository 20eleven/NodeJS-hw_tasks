import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import { userRouter, groupRouter, userGroupRouter } from './routers';
import { logServiceMethod, logUnhandledErrors } from './routers/middlewares';
import { winston } from './utils';
import env from './config/envConfig';

const app: Application = express();
const PORT = env.port || 8000;

app
    .use(express.json())
    .use(logServiceMethod)
    .use('/users', userRouter)
    .use('/groups', groupRouter)
    .use('/users_groups', userGroupRouter)
    .use(logUnhandledErrors);

process
    .on('uncaughtException', (error) => winston.error('Uncaught exception:', { error }))
    .on('unhandledRejection', (error) => winston.error('Unhandled rejection:', { error }));

app.listen(PORT);
