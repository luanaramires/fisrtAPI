import { NextFunction, Request, Response, Router } from "express";
import * as service from '../../services/CustService';


export const getAll = async (req: Request, res: Response) => {
   const { size, page, order } = req.query
   const query = {
      size: parseInt(req.query.size as string),
      page: parseInt(req.query.page as string),
      order: req.query.order as string
   }
   res.send(await service.getAll(query));
};

 export const getById = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.getById(parseInt(req.params.id)));
 };

 export const create = async (req: Request, res: Response) => {
    res.status(201).send(await service.create(req.body));
 };

 export const updateById = async (req: Request, res: Response) => {
    res.send(await service.updateById(parseInt(req.params.id), req.body));
 };

 export const deleteById = async (req: Request, res: Response) => {
await service.deleteById(parseInt(req.params.id));
 };
