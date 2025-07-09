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

// src/models/category.ts
var category_exports = {};
__export(category_exports, {
  default: () => category_default
});
module.exports = __toCommonJS(category_exports);
var import_sequelize = require("sequelize");
var category_default = (sequelize, DataTypes) => {
  class Category extends import_sequelize.Model {
    static associate(models) {
      Category.hasMany(models.Course, {
        foreignKey: "category_id"
      });
    }
  }
  Category.init(
    {
      title: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories"
    }
  );
  return Category;
};
