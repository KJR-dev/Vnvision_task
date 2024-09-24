'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', [{
      todo_name: 'eating',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      todo_name: 'sleeping',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      todo_name: 'coding',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      todo_name: 'dancing',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      todo_name: 'traveling',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      todo_name: 'marketing',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};
