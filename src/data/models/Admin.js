import DataType from 'sequelize';
import Model from '../sequelize';

const Admin = Model.define('admin', {
  admin_id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataType.STRING(48), allowNull: false},
  password: {type: DataType.STRING(64), allowNull: false},
  name: {type: DataType.STRING(32), allowNull: false},
  mobile: {type: DataType.STRING(15)},
  customer_id: {type: DataType.INTEGER, allowNull: false},
  type: {type: DataType.STRING(1), defaultValue: 'S', allowNull: false},
  status: {type: DataType.STRING(1), defaultValue: 'A', allowNull: false},
  memo: {type: DataType.STRING(100)},
  created_at: {type: DataType.DATE, defaultValue: DataType.NOW},
  updated_at: {type: DataType.DATE, defaultValue: DataType.NOW}
}, {
  tableName: 'admin',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Admin;
