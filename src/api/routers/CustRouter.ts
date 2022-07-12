import express, { Router, Request, Response } from 'express';
import * as controller from '../controllers/CustController';


const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.put('/:id', controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;