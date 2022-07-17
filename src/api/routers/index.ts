import {Router} from 'express';
import customers from './CustRouter';
import productlines from './ProductLinesRouter';
import payments from './PaymentsRouter';
import products from './ProductRouter';
import offices from './OfficesRouter';
import employees from './EmployeesRouter';
import orders from './OrdersRouter'


const routes = Router();

routes.use('/customers', customers)
routes.use('/employees', employees)
routes.use('/products', products)
routes.use('/offices', offices)
routes.use('/orders', orders)
routes.use('/payments', payments)
routes.use('/productlines', productlines)

export default routes;

