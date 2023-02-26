import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from 'cors';
import { userRouter, groupRouter, userGroupRouter } from './routers';
import { logServiceMethod, logUnhandledErrors } from './routers/middlewares';
import { winston } from './utils';
import { corsOptions, envConfig } from './config';

const app: Application = express();
const PORT = envConfig.port || 8000;

app
    .use(express.json())
    .use(cors(corsOptions))
    .use(logServiceMethod)
    .use('/users', userRouter)
    .use('/groups', groupRouter)
    .use('/users_groups', userGroupRouter)
    .use(logUnhandledErrors);

process
    .on('uncaughtException', (error) => winston.error('Uncaught exception:', { error }))
    .on('unhandledRejection', (error) => winston.error('Unhandled rejection:', { error }));

app.listen(PORT);
