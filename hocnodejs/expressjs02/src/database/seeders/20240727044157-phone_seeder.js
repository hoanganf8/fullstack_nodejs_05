"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("phones", [
      {
        value: "0987654321",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        value: "0123456789",
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("phones", null, {
      truncate: true,
    });
  },
};
