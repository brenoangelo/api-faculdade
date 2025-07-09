import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes, Model, ModelStatic, Dialect, Options as SequelizeOptions } from 'sequelize';
import { fileURLToPath } from 'url';
import process from 'process';
import configJson from '../config/config.json'
import { AssociableModel } from '../types';

type Db = {
  [key: string]: Sequelize | ModelStatic<Model> | typeof Sequelize;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
};

type ConfigType =
  | (SequelizeOptions & { dialect: Dialect }) // Com username/password
  | { use_env_variable: string; dialect: Dialect };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configJson[env as keyof typeof configJson] as ConfigType;

const db = {} as Record<'Course' | 'Person' | 'Registration' | 'Category', AssociableModel> & Db;

let sequelize: Sequelize;

if ('use_env_variable' in config) {
  sequelize = new Sequelize(process.env[config.use_env_variable]!, config);
} else {
  sequelize = new Sequelize(config.database!, config.username!, config.password, config);
}

const files = fs.readdirSync(__dirname).filter(file =>
  file.indexOf('.') !== 0 &&
  file !== basename &&
  file.endsWith('.ts') &&
  !file.endsWith('.test.ts')
);

for (const file of files) {
  (async () => {
    const model = await import(path.join(__dirname, file))
    db[model.name] = model.default(sequelize, DataTypes)
  })();
}

Object.values(db as Record<'Course' | 'Person' | 'Registration' | 'Category', AssociableModel>).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
