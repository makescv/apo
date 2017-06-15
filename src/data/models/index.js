import sequelize from '../sequelize';
import Member from './Member';
import Admin from './Admin';
import Company from './Company';
import Customer from './Customer';
import Space from './Space';

sequelize.sync();

export default sequelize;
export { Member, Admin, Company, Customer, Space };
