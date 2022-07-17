import OrderDetails from './models/OrdersDetailsModel';
import Orders from './models/OrdersModel';
import Employees from './models/EmployeesModel';
import Customers from './models/CustModel';
import Offices from './models/OfficesModel';
import Payments from './models/PaymentsModel'
import ProductLines from './models/ProductLinesModel';
import Product from './models/ProductModel';
import { connection } from './sequelize'

export const initdb = async () => {
    Promise.all([
        await connection(),
        console.log("sincronizando tabelas tabelas"),
        await Offices.sync({alter: true}),
        await Employees.sync ({alter: true}),
        await Customers.sync ({alter: true}),
        await Orders.sync({alter:true}),
        await ProductLines.sync({alter:true}),
        await Product.sync({alter: true}),
        await OrderDetails.sync({alter: true}),
        await Payments.sync({alter:true}),  
    ]).then(() => {
        console.log("Tabelas sincronizadas com sucesso")
    });
};