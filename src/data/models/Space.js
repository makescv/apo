import DataType from 'sequelize';
import Model from '../sequelize';

const Space = Model.define('Space', {
  space_id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataType.STRING(50), allowNull: false},
  address: {type: DataType.STRING(100), allowNull: false},
  email: {type: DataType.STRING(48), allowNull: false},
  tel: {type: DataType.STRING(20)},
  max_capacity: {type: DataType.INTEGER, allowNull: false},
  customer_id: {type: DataType.INTEGER, allowNull: false},
  created_at: {type: DataType.DATE, defaultValue: DataType.NOW},
  updated_at: {type: DataType.DATE, defaultValue: DataType.NOW}
}, {
  tableName: 'space',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Space;
