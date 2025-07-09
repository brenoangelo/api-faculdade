"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/app.ts
var import_express5 = __toESM(require("express"), 1);

// src/routes/index.ts
var import_express4 = __toESM(require("express"), 1);

// src/routes/personsRoute.ts
var import_express = require("express");

// src/models/index.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var import_sequelize = require("sequelize");
var import_url = require("url");
var import_process = __toESM(require("process"), 1);

// src/config/config.json
var config_default = {
  development: {
    storage: "./database.sqlite",
    dialect: "sqlite"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};

// src/models/index.ts
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var basename = import_path.default.basename(__filename);
var env = import_process.default.env.NODE_ENV || "development";
var config = config_default[env];
var db = {};
var sequelize;
if ("use_env_variable" in config) {
  sequelize = new import_sequelize.Sequelize(import_process.default.env[config.use_env_variable], config);
} else {
  sequelize = new import_sequelize.Sequelize(config.database, config.username, config.password, config);
}
var files = import_fs.default.readdirSync(__dirname).filter(
  (file) => file.indexOf(".") !== 0 && file !== basename && file.endsWith(".ts") && !file.endsWith(".test.ts")
);
for (const file of files) {
  (async () => {
    const model = await import(import_path.default.join(__dirname, file));
    db[model.name] = model.default(sequelize, import_sequelize.DataTypes);
  })();
}
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = import_sequelize.Sequelize;
var models_default = db;

// src/services/Services.ts
var Services = class {
  modelName;
  model;
  constructor(modelName) {
    this.modelName = modelName;
    this.model = models_default[this.modelName];
  }
  async getAllRegisters() {
    return this.model.findAll();
  }
  async getById(id) {
    return this.model.findOne({
      where: { id }
    });
  }
  async createRegister(newRegister) {
    return this.model.create(newRegister);
  }
  async updateRegister(dataUpdated, id) {
    const [affectedCount] = await this.model.update(dataUpdated, {
      where: { id }
    });
    return affectedCount > 0;
  }
  async deleteRegister(id) {
    const deletedCount = await this.model.destroy({
      where: { id }
    });
    return deletedCount > 0;
  }
};

// src/services/PersonServices.ts
var PersonServices = class extends Services {
  constructor() {
    super("Person");
  }
  async getRegistrationsByStudent(id) {
    const student = await super.getById(id);
    const registrationsList = await student.getEnrolledClasses();
    return registrationsList;
  }
};

// src/controllers/Controller.ts
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

// src/controllers/PersonController.ts
var personServices = new PersonServices();
var PersonController = class extends Controller {
  constructor() {
    super(personServices);
  }
  async getRegistrations(req, res) {
    const { studentId } = req.params;
    try {
      const registrationsList = await personServices.getRegistrationsByStudent(Number(studentId));
      return res.status(200).json(registrationsList);
    } catch (error) {
      console.error(error.message);
    }
  }
};

// src/services/RegistrationServices.ts
var RegistrationServices = class extends Services {
  constructor() {
    super("Registration");
  }
};

// src/controllers/RegistrationController.ts
var registrationServices = new RegistrationServices();
var RegistrationController = class extends Controller {
  constructor() {
    super(registrationServices);
  }
};

// src/routes/personsRoute.ts
var personController = new PersonController();
var registrationController = new RegistrationController();
var router = (0, import_express.Router)();
router.get("/persons", (req, res) => personController.getAll(req, res));
router.get("/persons/:id", (req, res) => personController.getById(req, res));
router.post("/persons", (req, res) => personController.create(req, res));
router.put("/persons/:id", (req, res) => personController.update(req, res));
router.delete("/persons/:id", (req, res) => personController.delete(req, res));
router.get("/persons/:studentId/registrations", (req, res) => personController.getRegistrations(req, res));
router.post("/persons/:studentId/registrations", (req, res) => registrationController.create(req, res));

// src/routes/categoriesRoute.ts
var import_express2 = require("express");

// src/services/CategoryServices.ts
var CategoryServices = class extends Services {
  constructor() {
    super("Category");
  }
};

// src/controllers/CategoryController.ts
var categoryServices = new CategoryServices();
var CategoryController = class extends Controller {
  constructor() {
    super(categoryServices);
  }
};

// src/routes/categoriesRoute.ts
var categoryController = new CategoryController();
var router2 = (0, import_express2.Router)();
router2.get("/categories", (req, res) => categoryController.getAll(req, res));
router2.get("/categories/:id", (req, res) => categoryController.getById(req, res));
router2.post("/categories", (req, res) => categoryController.create(req, res));
router2.put("/categories/:id", (req, res) => categoryController.update(req, res));
router2.delete("/categories/:id", (req, res) => categoryController.delete(req, res));

// src/routes/coursesRoute.ts
var import_express3 = require("express");

// src/services/CourseServices.ts
var CourseServices = class extends Services {
  constructor() {
    super("Course");
  }
};

// src/controllers/CourseController.ts
var courseServices = new CourseServices();
var CourseController = class extends Controller {
  constructor() {
    super(courseServices);
  }
};

// src/routes/coursesRoute.ts
var courseController = new CourseController();
var router3 = (0, import_express3.Router)();
router3.get("/courses", (req, res) => courseController.getAll(req, res));
router3.get("/courses/:id", (req, res) => courseController.getById(req, res));
router3.post("/courses", (req, res) => courseController.create(req, res));
router3.put("/courses/:id", (req, res) => courseController.update(req, res));
router3.delete("/courses/:id", (req, res) => courseController.delete(req, res));

// src/routes/index.ts
function routes(app2) {
  app2.use(
    import_express4.default.json(),
    router,
    router2,
    router3
  );
}

// src/app.ts
var app = (0, import_express5.default)();
routes(app);

// src/server.ts
var PORT = 3e3;
app.listen(PORT, () => {
  console.log("servidor escutando!");
});
