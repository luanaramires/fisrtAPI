
import AppError from '../../utils/AppError';
import Model, { OrdersInput, OrdersOutput } from '../models/OrdersModel';

export const getAll = async (): Promise<OrdersOutput[]> => {
   return await Model.findAll();
}

export const getById = async (id: number): Promise<OrdersOutput> => {
   const orders = await Model.findByPk(id);

   if (!orders) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 464);
   }
      return orders;
}

export const create = async (payload:OrdersInput): Promise<OrdersOutput> => {
   return await Model.create(payload);
}

export const updateById = async (id: number, payload: OrdersInput): Promise<OrdersOutput> => {
   const orders = await Model.findByPk(id);

   if (!orders) {
      throw new AppError('NotFoundError', 'Regristro nao encontrado', 404);
   }

   return await orders.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
   const orders = await Model.findByPk(id);

   if (!orders) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 404);

   }

   return await orders.destroy();
}

