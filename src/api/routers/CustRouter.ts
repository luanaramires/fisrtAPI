import express, { Router, Request, Response } from 'express';
import * as controller from '../controllers/CustController';
import { CustomersCreateValidation, CustomersUpdateValidation} from '../validations/CustValidation'


const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post("/", CustomersCreateValidation, controller.create);

router.put("/:id", CustomersUpdateValidation, controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;