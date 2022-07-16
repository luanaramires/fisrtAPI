import{ ProductsInput, ProductsOutput } from '../databases/models/ProductModel';
import * as repository from '../databases/repositories/ProductRepository';


export const getAll =  async(): Promise<ProductsOutput[]> => {
     return repository.getAll();
};

export const getById = async (id: number): Promise<ProductsOutput> => {
     return await repository.getById(id)
};

export const create = async (payload: ProductsInput): Promise<ProductsOutput> => {
     return await repository.create(payload);
};

export const updateById = async (id: number, payload: ProductsInput): Promise<ProductsOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
     repository.deleteById(id);
};