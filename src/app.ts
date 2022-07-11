import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import 'express-async-errors';

import routes from './api/routers/ModelRouter';
import sequelize from './databases/repositories/sequelize';
import  AppError  from './utils/AppError';
import { Error } from 'sequelize';

const app = express ();
const port: number = 4001;

app.use(bodyParser.json());

app.use('/api/vl', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('hello models');
});

app.use(errors());

app.use((err:AppError, req: Request, res: Response, NextFunction) => {
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

// sequelize.authenticate().then(() => {
//     console.log('conexao feita com workbench');
// }).catch(() => {
//     console.log('conexao com o workbench nao foi feita' + Error);
// });