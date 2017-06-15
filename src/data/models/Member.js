import DataType from 'sequelize';
import Model from '../sequelize';

const Member = Model.define('Member', {
  member_id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataType.STRING(48), allowNull: false},
  password: {type: DataType.STRING(64), allowNull: false},
  name: {type: DataType.STRING(32), allowNull: false},
  mobile: {type: DataType.STRING(15)},
  company_id: {type: DataType.INTEGER},
  type: {type: DataType.STRING(1), defaultValue: 'N', allowNull: false},
  status: {type: DataType.STRING(1), defaultValue: 'A', allowNull: false},
  memo: {type: DataType.STRING(100)},
  space_id: {type: DataType.INTEGER},
  created_at: {type: DataType.DATE, defaultValue: DataType.NOW},
  updated_at: {type: DataType.DATE, defaultValue: DataType.NOW}
}, {
  tableName: 'member',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

// index option in second parameter
// tableName: 'member',
// indexes: [
//   { fields: ['email'] },
// ]

export default Member;
