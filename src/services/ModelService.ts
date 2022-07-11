import{ ProductsInput, ProductsOutput } from '../databases/models/MModel';
import * as repository from '../databases/repositories/ModelRepository';


export const getAll =  async(): Promise<ProductsOutput[]> => {
     return repository.getAll();
};

export const getById = async (id: number): Promise<ProductsOutput> => {
     try {
          return await repository.getById(id);
     } catch (error) {
          throw error;
     }
};

export const create = async (payload: ProductsInput): Promise<ProductsOutput> => {
     return await repository.create(payload);
};

export const update = async (id: number, payload: ProductsInput): Promise<ProductsOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
     repository.deleteById(id);
};