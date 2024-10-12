import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database_mvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {

    sequelize.authenticate();
    console.log('Conexão MySQL estabelecida com sucesso');

} catch(error) {
    console.log(`Problema de conexão com o banco de dados\n${error}`);
}

export default sequelize;