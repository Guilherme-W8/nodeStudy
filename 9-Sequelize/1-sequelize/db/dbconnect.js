import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sequelizeDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('successful connection');
} catch(error) {
  console.log(`Connection failed ${error}`);
}

export default sequelize;