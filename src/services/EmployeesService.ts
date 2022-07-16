import{ EmployeesInput, EmployeesOutput } from '../databases/models/EmployeesModel';
import * as repository from '../databases/repositories/EmployeesRepository';


export const getAll =  async(): Promise<EmployeesOutput[]> => {
     return await repository.getAll();
};

export const getById = async (id: number): Promise<EmployeesOutput> => {
 return await repository.getById(id);
};

export const create = async (payload: EmployeesInput): Promise<EmployeesOutput> => {
     return await repository.create(payload);
};

export const updateById = async (id: number, payload: EmployeesInput): Promise<EmployeesOutput> => {
     return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id);
};