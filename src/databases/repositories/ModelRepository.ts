import AppeError from '../../utils/AppError';
import Products, { ProductsInput, ProductsOutput } from '../models/MModel';

export const getAll = async (): Promise<ProductsOutput[]> => {
   return await Products.findAll();
}

export const getById = async (id: number): Promise<ProductsOutput> => {
   const Products = await FileSystem.findByPk(id);

   if (!Products) {
      throw new AppeError('NotFoundError', 'Registro nao encontrado', 464);
   }
      return Products;
}

export const create = async (payload:ProductsInput): Promise<ProductsOutput> => {
   return await Products.create(payload);
}

export const updateById = async (id: number, payload: ProductsInput): Promise<ProductsOutput> => {
   const Products = await Products.findByPk(id);

   if (!Products) {
      throw new AppeError('NotFoundError', 'Regristro nao encontrado', 404);
   }

   return await Products.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
   const Products = await Products.findByPk(id);

   if (!Products) {
      throw new AppeError('NotFoundError', 'Registro nao encontrado', 404);

   }

   return await Products.destroy();
}


