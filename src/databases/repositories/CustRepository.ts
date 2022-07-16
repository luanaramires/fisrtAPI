import AppError from '../../utils/AppError';
import Model, { CustomersInput, CustomersOutput } from '../models/CustModel';

export const getAll = async (): Promise<CustomersOutput[]> => {
   return await Model.findAll();
}

export const getById = async (id: number): Promise<CustomersOutput> => {
   const customers = await Model.findByPk(id);

   if (!customers) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 464);
   }
      return customers;
}

export const create = async (payload:CustomersInput): Promise<CustomersOutput> => {
   return await Model.create(payload);
}

export const updateById = async (id: number, payload: CustomersInput): Promise<CustomersOutput> => {
   const customers = await Model.findByPk(id);

   if (!customers) {
      throw new AppError('NotFoundError', 'Regristro nao encontrado', 404);
   }

   return await customers.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
   const customers = await Model.findByPk(id);

   if (!customers) {
      throw new AppError('NotFoundError', 'Registro nao encontrado', 404);

   }

   return await customers.destroy();
}

