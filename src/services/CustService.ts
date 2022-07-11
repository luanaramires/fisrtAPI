import{ CustomersInput, CustomersOutput } from '../databases/models/CustModel';
import * as repository from '../databases/repositories/CustRepository';


export const getAll =  async(): Promise<CustomersOutput[]> => {
     return repository.getAll();
};

export const getById = async (id: number): Promise<CustomersOutput> => {
     try {
          return await repository.getById(id);
     } catch (error) {
          throw error;
     }
};

export const create = async (payload: CustomersInput): Promise<CustomersOutput> => {
     return await repository.create(payload);
};

export const update = async (id: number, payload: CustomersInput): Promise<CustomersOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
     repository.deleteById(id);
};