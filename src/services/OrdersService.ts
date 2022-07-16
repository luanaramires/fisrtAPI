import{ OrdersInput, OrdersOutput } from '../databases/models/OrdersModel';
import * as repository from '../databases/repositories/OrdersRepository';


export const getAll =  async(): Promise<OrdersOutput[]> => {
     return await repository.getAll();
};

export const getById = async (id: number): Promise<OrdersOutput> => {
 return await repository.getById(id);
};

export const create = async (payload: OrdersInput): Promise<OrdersOutput> => {
     return await repository.create(payload);
};

export const updateById = async (id: number, payload: OrdersInput): Promise<OrdersOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id);
};