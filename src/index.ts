import express, { Request, Response, Application } from 'express';
import {
    createUser,
    deleteUserById,
    updateUser,
    readUser,
    getAutoSuggestUsers
} from './utils';

const app: Application = express();
const router = express.Router();
const PORT = process.env.PORT || 8000;

app
    .use(express.json())
    .use('/users', router);

router.get('/', (req: Request, res: Response) => res.status(200).json({ message: 'success' }));

router
    .post('/create', createUser)
    .get('/read/:id', readUser)
    .put('/update/:id', updateUser)
    .delete('/delete/:id', deleteUserById)
    .get('/find', getAutoSuggestUsers);

app.listen(PORT);
