import{ CustomersInput, CustomersOutput } from '../databases/models/CustModel';
import * as repository from '../databases/repositories/CustRepository';


export const getAll =  async(): Promise<CustomersOutput[]> => {
     return await repository.getAll();
};

export const getById = async (id: number): Promise<CustomersOutput> => {
 return await repository.getById(id);
};

export const create = async (payload: CustomersInput): Promise<CustomersOutput> => {
     return await repository.create(payload);
};

export const updateById = async (id: number, payload: CustomersInput): Promise<CustomersOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id);
};