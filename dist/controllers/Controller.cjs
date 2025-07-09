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

// src/controllers/Controller.ts
var Controller_exports = {};
__export(Controller_exports, {
  Controller: () => Controller
});
module.exports = __toCommonJS(Controller_exports);
var Controller = class {
  serviceEntity;
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }
  async getAll(req, res) {
    try {
      const data = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  async getById(req, res) {
    const { id } = req.params;
    try {
      const data = await this.serviceEntity.getById(Number(id));
      if (!data.length) {
        return res.status(404).json({ message: "N\xE3o encontrado" });
      }
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  async create(req, res) {
    const newRegister = req.body;
    try {
      await this.serviceEntity.createRegister(newRegister);
      return res.status(201).json(newRegister);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const dataUpdated = req.body;
    try {
      const isUpdated = await this.serviceEntity.updateRegister(dataUpdated, Number(id));
      if (!isUpdated) {
        return res.status(400).json({ message: "Registro n\xE3o foi atualizado" });
      }
      return res.status(200).json({ message: "Atualizado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await this.serviceEntity.deleteRegister(Number(id));
      if (!isDeleted) {
        return res.status(400).json({ message: "Registro n\xE3o foi deletado" });
      }
      return res.status(200).json({ message: "Deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Controller
});
