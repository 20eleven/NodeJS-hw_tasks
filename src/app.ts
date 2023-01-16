import express, { Application } from 'express';
import { userRouter } from './routers';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app
    .use(express.json())
    .use('/users', userRouter);

app.listen(PORT);
