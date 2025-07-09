"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/migrations/20250530115907-create-registration.ts
var create_registration_exports = {};
__export(create_registration_exports, {
  default: () => create_registration_default
});
module.exports = __toCommonJS(create_registration_exports);
var import_sequelize = require("sequelize");
var create_registration_default = {
  async up(queryInterface) {
    await queryInterface.createTable("registrations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: import_sequelize.DataTypes.INTEGER
      },
      status: {
        type: import_sequelize.DataTypes.STRING
      },
      student_id: {
        allowNull: false,
        type: import_sequelize.DataTypes.INTEGER,
        references: {
          model: "persons",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      course_id: {
        allowNull: false,
        type: import_sequelize.DataTypes.INTEGER,
        references: {
          model: "courses",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: import_sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: import_sequelize.DataTypes.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("registrations");
  }
};
