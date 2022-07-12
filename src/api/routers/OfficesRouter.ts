import express, { Router } from 'express';
import * as controller from '../controllers/OfficesController';
import { ModelCreateValidation, ModelUpdateValidation } from '../validations/OfficesValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.create);

router.put('/:id', controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;