import express, { Router } from 'express';
import * as controller from '../controllers/ModelController';
import { ModelCreateValidation, ModelUpdateValidation } from '../validations/ModelValidation';

const router = router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', ModelCreateValidation, controller.create);

router.put('/:id', controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;