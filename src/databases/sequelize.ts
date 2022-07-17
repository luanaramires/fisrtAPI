import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('classicmodels', 'root', '021329', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        // timestamps: false
        createdAt: false,
        updatedAt: false,
    },
    timezone: '-03:00',
    logging: false
});

export const connection = async() => { 
    await sequelize
        .authenticate()
        .then(() => {
             console.log('conexao feita com sucesso')
})
.catch ((error: Error) =>{
    console.log (`conexao nao realizada ${error}`)
});

};

export default sequelize;