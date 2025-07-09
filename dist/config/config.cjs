// src/config/config.json
var development = {
  storage: "./database.sqlite",
  dialect: "sqlite"
};
var test = {
  username: "root",
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql"
};
var production = {
  username: "root",
  password: null,
  database: "database_production",
  host: "127.0.0.1",
  dialect: "mysql"
};
var config_default = {
  development,
  test,
  production
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  development,
  production,
  test
});
