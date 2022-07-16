import {Router} from 'express';
import customers from './CustRouter';
import products from './ProductRouter';
import offices from './OfficesRouter';
import employees from './EmployeesRouter';


const routes = Router();

routes.use('/customers', customers);
routes.use('/products', products);
routes.use('/offices', offices);
routes.use('/employees', employees);

export default routes;

