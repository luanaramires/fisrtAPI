import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('classicmodels', 'root', '021329', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false
    }
});

export default () => {




};
