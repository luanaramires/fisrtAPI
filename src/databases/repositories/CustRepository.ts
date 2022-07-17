import AppError from '../../utils/AppError';
import Model, { CustomersInput, CustomersOutput } from '../models/CustModel';
import { Query } from '../../types/pagination'
import { GetPagination } from '../../utils/getPagination'
import {Op} from 'sequelize'
export const getAll = async (customerName:string, creditLimitMin: string, creditLimitMax: string, query: Query): Promise<{rows: CustomersOutput[], count: number}> =>{
   let {size, page, sort, order, ...filters} = query

   const creditMin = parseInt(creditLimitMin)
   const creditMax = parseInt(creditLimitMax)

   const id  = 'customerNumber'
   const {...pagination}  =  GetPagination(id, query)

   if(!customerName) customerName = ''

   return await Model.findAndCountAll({
       where:{
           customerName:{[Op.like]:`%${customerName}%`},
           creditLimit: {[Op.between]: [creditMin, creditMax]},
           ...filters
       },
       ...pagination
   })
}

export const getById = async (id: number): Promise<CustomersOutput> => {
   const customers = await Model.findOne({
      where: {
         customerNumber: id,
      },
      include: { all: true, nested: true },
   });

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

