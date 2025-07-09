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

// src/migrations/20250528002926-create-person.ts
var create_person_exports = {};
__export(create_person_exports, {
  default: () => create_person_default
});
module.exports = __toCommonJS(create_person_exports);
var import_sequelize = require("sequelize");
var create_person_default = {
  async up(queryInterface) {
    await queryInterface.createTable("persons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: import_sequelize.DataTypes.INTEGER
      },
      name: {
        type: import_sequelize.DataTypes.STRING
      },
      email: {
        type: import_sequelize.DataTypes.STRING
      },
      cpf: {
        type: import_sequelize.DataTypes.STRING
      },
      enabled: {
        type: import_sequelize.DataTypes.BOOLEAN
      },
      role: {
        type: import_sequelize.DataTypes.STRING
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
    await queryInterface.dropTable("persons");
  }
};
