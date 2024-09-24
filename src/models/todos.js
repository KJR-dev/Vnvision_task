'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Todos extends Model {
    static associate(models) {}
  }

  Todos.init({
    todo_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      get() {
        const rawValue = this.getDataValue('todo_name');
        return rawValue ? rawValue.toUpperCase() : null;
      },
      set(value) {
        this.setDataValue('todo_name', value.toLowerCase()); // Correctly set 'todo_name' here
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      get() {
        const status = this.getDataValue('status');
        return status ? 'Completed' : 'Pending';
      },
      set(value) {
        this.setDataValue('status', value.toLowerCase() === 'completed');
      }
    }
  }, {
    sequelize,
    modelName: 'todos',
    paranoid: true,
    timestamps: true,
    deletedAt: 'deletedAt',
  });

  return Todos; // Ensure the return value is correctly capitalized
};
