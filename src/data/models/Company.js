import DataType from 'sequelize';
import Model from '../sequelize';

const Company = Model.define('Company', {
  company_id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataType.STRING(32), allowNull: false},
  created_at: {type: DataType.DATE, defaultValue: DataType.NOW},
  updated_at: {type: DataType.DATE, defaultValue: DataType.NOW}
}, {
  tableName: 'company',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Company;
