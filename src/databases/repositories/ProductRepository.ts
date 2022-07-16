import AppError from '../../utils/AppError';
import Model, { ProductsInput, ProductsOutput } from '../models/ProductModel';

export const getAll = async (): Promise<ProductsOutput[]> => {
   return await Model.findAll();
}

export const getById = async (id: number): Promise<ProductsOutput> => {
   const products = await Model.findByPk(id);

   if (!products) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 464);
   }
      return products;
}

export const create = async (payload:ProductsInput): Promise<ProductsOutput> => {
   return await Model.create(payload)
}

export const updateById = async (id: number, payload: ProductsInput): Promise<ProductsOutput> => {
   const products = await Model.findByPk(id)

   if (!products) {
      throw new AppError('NotFoundError', 'Regristro nao encontrado', 404);
   }

   return await products.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
   const products = await Model.findByPk(id);

   if (!products) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 404);

   }

   return await products.destroy();
}


