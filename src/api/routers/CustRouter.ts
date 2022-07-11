import express, { Router } from 'express';
import * as controller from '../controllers/CustController';
import { CustomerCreateValidation, CustomerUpdateValidation } from '../validations/CustValidation';

const router = router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', CustomerCreateValidation, controller.create);

router.put('/:id', controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;