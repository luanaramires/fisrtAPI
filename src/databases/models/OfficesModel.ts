import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';


interface OfficesAttributes {
    officeCode: string;
    city: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    state: string;
    country: number;
    postalCode: string;
    territory: string;
};

export interface OfficesInput extends Optional<OfficesAttributes, 'officeCode'>{};
export interface OfficesOutput extends Required<OfficesAttributes>{};

class Offices extends Model<OfficesAttributes, OfficesInput> {
   declare officeCode: string;
   declare city: string;
   declare phone: string;
   declare addressLine1: string;
   declare addressLine2: string;
   declare state: string;
   declare country: number;
   declare postalCode: string;
   declare territory: string;  
};

Offices.init({
    officeCode: {  type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    city: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    addressLine1: { type: DataTypes.STRING },
    addressLine2: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    country: { type: DataTypes.INTEGER },
    postalCode: { type: DataTypes.STRING },
    territory: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'offices'
});

export default Offices