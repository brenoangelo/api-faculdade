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

// src/migrations/20250530115650-create-category.ts
var create_category_exports = {};
__export(create_category_exports, {
  default: () => create_category_default
});
module.exports = __toCommonJS(create_category_exports);
var import_sequelize = require("sequelize");
var create_category_default = {
  async up(queryInterface) {
    await queryInterface.createTable("categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: import_sequelize.DataTypes.INTEGER
      },
      title: {
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
    await queryInterface.dropTable("categories");
  }
};
