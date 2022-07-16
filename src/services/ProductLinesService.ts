import{ ProductlinesInput, ProductlinesOutput } from '../databases/models/ProductLinesModel';
import * as repository from '../databases/repositories/ProductLinesRepository';


export const getAll =  async(): Promise<ProductlinesOutput[]> => {
     return await repository.getAll();
};

export const getById = async (id: number): Promise<ProductlinesOutput> => {
 return await repository.getById(id);
};

export const create = async (payload: ProductlinesInput): Promise<ProductlinesOutput> => {
     return await repository.create(payload);
};

export const updateById = async (id: number, payload: ProductlinesInput): Promise<ProductlinesOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id);
};