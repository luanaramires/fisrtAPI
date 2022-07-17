import express, { Router } from 'express';
import * as controller from '../controllers/ProductController';
import { ProductsCreateValidation, ProductsUpdateValidation } from '../validations/ProductValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post("/", ProductsCreateValidation, controller.create);

router.put("/:id", ProductsUpdateValidation, controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;