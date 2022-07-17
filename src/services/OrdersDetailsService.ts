import{ OrdersDetailsInput, OrdersDetailsOutput } from '../databases/models/OrdersDetailsModel';
import * as repository from '../databases/repositories/OrdersDetailsRepository';


export const getAll =  async(): Promise<OrdersDetailsOutput[]> => {
     return await repository.getAll();
};

export const getById = async (id: number): Promise<OrdersDetailsOutput> => {
 return await repository.getById(id);
};

export const create = async (payload: OrdersDetailsInput): Promise<OrdersDetailsOutput> => {
     return await repository.create(payload);
};

export const updateById = async (id: number, payload: OrdersDetailsInput): Promise<OrdersDetailsOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id);
};