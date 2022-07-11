import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../repositories/sequelize';


interface ProductsAttributes {
    product_id: number;
    productCode: string;
    productName: string;
    productLine: string;
    productScale: string;
    productVendor: string;
    productDescription: string;
    quantityInStok: string;
    buyPrice: string;
    MSRP: string;
};

export interface ProductsInput extends Optional<ProductsAttributes, 'product_id'>{};
export interface ProductsOutput extends Required<ProductsAttributes>{};

class Products extends Model<ProductsAttributes, ProductsInput> {
   declare product_id: number;
   declare productCode: string;
   declare productName: string;
   declare productLine: string;
   declare productScale: string;
   declare productVendor: string;
   declare productDescription: string;
   declare quantityInStok: string;
   declare buyPrice: string;
   declare MSRP: string;  
};

Products.init({
    product_id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productCode: { type: DataTypes.STRING },
    productName: { type: DataTypes.STRING },
    productLine: { type: DataTypes.STRING },
    productScale: { type: DataTypes.STRING },
    productVendor: { type: DataTypes.STRING },
    productDescription: { type: DataTypes.STRING },
    quantityInStok: { type: DataTypes.STRING },
    buyPrice: { type: DataTypes.STRING },
    MSRP: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'Products'
});

export default Products