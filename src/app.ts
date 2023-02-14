import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import { userRouter, groupRouter, userGroupRouter } from './routers';
import { logServiceMethod } from './routers/middlewares';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app
    .use(express.json())
    .use(logServiceMethod)
    .use('/users', userRouter)
    .use('/groups', groupRouter)
    .use('/users_groups', userGroupRouter);

app.listen(PORT);
