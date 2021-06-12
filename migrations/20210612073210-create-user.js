'use strict';
module.exports = {
  up: async (queryInterface, DateTypes) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DateTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DateTypes.STRING,
        allowNull: true
      },
      email: {
        type: DateTypes.STRING,
        allowNull: true
      },
      role: {
        type: DateTypes.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DateTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DateTypes.DATE
      }
    });
  },
  down: async (queryInterface, DateTypes) => {
    await queryInterface.dropTable('users');
  }
};