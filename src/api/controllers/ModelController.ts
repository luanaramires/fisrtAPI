import { NextFunction, Request, Response, Router } from "express";
import { ProductsInput, ProductsOutput } from '../../databases/models/MModel';
import * as service from '../../services/ModelService';


export const getAll = async (req: Request, res: Response) => {
    res.send(await service.getAll());
};

 export const getById = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.getById(parseInt(req.params.id)));
 };

 export const create = async (req: Request, res: Response) => {
    res.status(201).send(await service.create(req.params.id),(req.body));
 };

 export const updateById = async (req: Request, res: Response) => {
    res.send(await service.updateById(parseInt(req.params.id), req.body));
 };

 export const deleteById = async (req: Request, res: Response) => {
await service.deleteById(parseInt(req.params.id));
 };
