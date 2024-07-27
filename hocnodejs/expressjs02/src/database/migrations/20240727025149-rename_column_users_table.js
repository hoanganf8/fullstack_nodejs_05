"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "name", "fullname");
    await queryInterface.changeColumn("users", "status", {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "fullname", "name");
    await queryInterface.changeColumn("users", "status", {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: true,
    });
  },
};
