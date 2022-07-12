import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';


interface ProductsAttributes {
    productCode: string;
    productName: string;
    productLine: string;
    productScale: string;
    productVendor: string;
    productDescription: string;
    quantityInStock: number;
    buyPrice: string;
    MSRP: string;
};

export interface ProductsInput extends Optional<ProductsAttributes, 'productCode'>{};
export interface ProductsOutput extends Required<ProductsAttributes>{};

class Products extends Model<ProductsAttributes, ProductsInput> {
   declare productCode: string;
   declare productName: string;
   declare productLine: string;
   declare productScale: string;
   declare productVendor: string;
   declare productDescription: string;
   declare quantityInStock: number;
   declare buyPrice: string;
   declare MSRP: string;  
};

Products.init({
    productCode: {  type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    productName: { type: DataTypes.STRING },
    productLine: { type: DataTypes.STRING },
    productScale: { type: DataTypes.STRING },
    productVendor: { type: DataTypes.STRING },
    productDescription: { type: DataTypes.STRING },
    quantityInStock: { type: DataTypes.INTEGER },
    buyPrice: { type: DataTypes.STRING },
    MSRP: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'products'
});

export default Products