
import AppError from '../../utils/AppError';
import Model, { PaymentsInput, PaymentsOutput } from '../models/PaymentsModel';

export const getAll = async (): Promise<PaymentsOutput[]> => {
   return await Model.findAll();
}

export const getById = async (id: number): Promise<PaymentsOutput> => {
   const payments = await Model.findByPk(id);

   if (!payments) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 464);
   }
      return payments;
}

export const create = async (payload:PaymentsInput): Promise<PaymentsOutput> => {
   return await Model.create(payload);
}

export const updateById = async (id: number, payload: PaymentsInput): Promise<PaymentsOutput> => {
   const payments = await Model.findByPk(id);

   if (!payments) {
      throw new AppError('NotFoundError', 'Regristro nao encontrado', 404);
   }

   return await payments.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
   const payments = await Model.findByPk(id);

   if (!payments) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 404);

   }

   return await payments.destroy();
}

