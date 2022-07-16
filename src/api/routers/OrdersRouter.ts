import express, { Router, Request, Response } from 'express';
import * as controller from '../controllers/OrdersController';
import { OrdersCreateValidations, OrdersUpdateValidations} from '../validations/OrdersValidation'

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post("/", OrdersCreateValidation, controller.create);

router.put("/:id", OrdersUpdateValidation, controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;