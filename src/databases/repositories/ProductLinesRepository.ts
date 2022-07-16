
import AppError from '../../utils/AppError';
import Model, { ProductlinesInput, ProductlinesOutput } from '../models/ProductlinesModel';

export const getAll = async (): Promise<ProductlinesOutput[]> => {
   return await Model.findAll();
}

export const getById = async (id: number): Promise<ProductlinesOutput> => {
   const productLines = await Model.findByPk(id);

   if (!productLines) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 464);
   }
      return productLines;
}

export const create = async (payload:ProductlinesInput): Promise<ProductlinesOutput> => {
   return await Model.create(payload);
}

export const updateById = async (id: number, payload: ProductlinesInput): Promise<ProductlinesOutput> => {
   const productLines = await Model.findByPk(id);

   if (!productLines) {
      throw new AppError('NotFoundError', 'Regristro nao encontrado', 404);
   }

   return await productLines.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
   const productLines = await Model.findByPk(id);

   if (!productLines) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 404);

   }

   return await productLines.destroy();
}

