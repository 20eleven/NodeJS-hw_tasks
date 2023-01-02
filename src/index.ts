import express, { Request, Response, Application } from 'express';
import {
    createUser,
    deleteUserById,
    updateUser,
    readUser,
    getAutoSuggestUsers,
    validateSchema,
    schema
} from './utils';

const app: Application = express();
const router = express.Router();
const PORT = process.env.PORT || 8000;

app
    .use(express.json())
    .use('/users', router);

router.get('/', (req: Request, res: Response) => res.status(200).json({ message: 'success' }));

router
    .post('/create', validateSchema(schema), createUser)
    .get('/read/:id', readUser)
    .put('/update/:id', validateSchema(schema), updateUser)
    .delete('/delete/:id', deleteUserById)
    .get('/find', getAutoSuggestUsers);

app.listen(PORT);
