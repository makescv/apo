import Sequelize from 'sequelize';
import config from '../config';

//체크 비번
const sequelize = new Sequelize(config.databaseUrl, {
  define: {
    freezeTableName: true,
  },
  dialect: 'postgres',
});

export default sequelize;
