"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("book_authors", {
      bookAuthorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bookId: {
        type: DataTypes.UUID(),
        primaryKey: true,
        unique:"book_user_id_index"
      },
      userId: {
        type: DataTypes.UUID(),
        primaryKey: true,
        unique:"book_user_id_index"
      },
      createdAt: {
        type: new DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: new DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: new DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("book_authors");
  },
};
