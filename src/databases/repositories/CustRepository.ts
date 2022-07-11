import AppeError from '../../utils/AppError';
import Customers, { CustomersInput, CustomersOutput } from '../models/CustModel';

export const getAll = async (): Promise<CustomersOutput[]> => {
   return await Customers.findAll();
}

export const getById = async (id: number): Promise<CustomersOutput> => {
   const Customers = await FileSystem.findByPk(id);

   if (!Customers) {
      throw new AppeError('NotFoundError', 'Registro nao encontrado', 464);
   }
      return Customers;
}

export const create = async (payload:CustomersInput): Promise<CustomersOutput> => {
   return await Customers.create(payload);
}

export const updateById = async (id: number, payload: CustomersInput): Promise<CustomersOutput> => {
   const Customers = await Customers.findByPk(id);

   if (!Customers) {
      throw new AppeError('NotFoundError', 'Regristro nao encontrado', 404);
   }

   return await Customers.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
   const Customers = await Customers.findByPk(id);

   if (!Customers) {
      throw new AppeError('NotFoundError', 'Registro nao encontrado', 404);

   }

   return await Customers.destroy();
}


