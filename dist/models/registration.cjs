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

// src/models/registration.ts
var registration_exports = {};
__export(registration_exports, {
  default: () => registration_default
});
module.exports = __toCommonJS(registration_exports);
var import_sequelize = require("sequelize");
var registration_default = (sequelize, DataTypes) => {
  class Registration extends import_sequelize.Model {
    static associate(models) {
      Registration.belongsTo(models.Person, {
        foreignKey: "student_id"
      });
      Registration.belongsTo(models.Course, {
        foreignKey: "course_id"
      });
    }
  }
  Registration.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Registration",
    tableName: "registrations"
  });
  return Registration;
};
