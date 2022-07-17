import{ PaymentsInput, PaymentsOutput } from '../databases/models/PaymentsModel';
import * as repository from '../databases/repositories/PaymentsRepository';


export const getAll =  async(): Promise<PaymentsOutput[]> => {
     return await repository.getAll();
};

export const getById = async (id: number): Promise<PaymentsOutput> => {
 return await repository.getById(id);
};

export const create = async (payload: PaymentsInput): Promise<PaymentsOutput> => {
     return await repository.create(payload);
};

export const updateById = async (id: number, payload: PaymentsInput): Promise<PaymentsOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id);
};