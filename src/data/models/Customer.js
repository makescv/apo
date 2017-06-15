import DataType from 'sequelize';
import Model from '../sequelize';

const Customer = Model.define('Customer', {
  customer_id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataType.STRING(32), allowNull: false},
  created_at: {type: DataType.DATE, defaultValue: DataType.NOW},
  updated_at: {type: DataType.DATE, defaultValue: DataType.NOW}
}, {
  tableName: 'customer',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Customer;
