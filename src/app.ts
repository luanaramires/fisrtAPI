import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import 'express-async-errors';

import routes from './api/routers';
import  AppError  from './utils/AppError';
import { initdb } from './databases/initdb';

const app: Express = express();
const port: number = 4001;

app.use(bodyParser.json());

app.use('/api/vl', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('hello models');
});

app.use(errors());

app.use((err:AppError, req: Request, res: Response, next:NextFunction) => {
    console.error(err);
    try {
        res.status(err.getHttpCode()).send(err.getError());
    } catch (error) {
        const appError = new AppError('InternalServerError', 'Erro do servidor', 500);
        res.status(508).send(appError.getError());
    }
});

app.listen(port, () => {
    console.log(`rodando na porta ${port}`);
});

// connection();
initdb();