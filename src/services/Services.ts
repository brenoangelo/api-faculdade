import dataSource from '../models/index';
import { Model, FindOptions, UpdateOptions, DestroyOptions } from 'sequelize';

type ModelNames = 'Category' | 'Person' | 'Course' | 'Registration';

// Você pode ajustar `ModelAttributes` para tipos mais específicos se tiver.
type NewRegister = Record<string, any>;
type DataUpdated = Record<string, any>;

// Defina o tipo do model como Model<any, any> para manter genérico, ou especifique seus atributos.
type ModelInstance = typeof Model & {
  findAll: (options?: FindOptions) => Promise<any[]>;
  findOne: (options?: FindOptions) => Promise<any | null>;
  create: (data: NewRegister) => Promise<any>;
  update: (data: DataUpdated, options: UpdateOptions) => Promise<[number, any[]]>;
  destroy: (options: DestroyOptions) => Promise<number>;
};

export class Services {
  private modelName: ModelNames;
  private model: ModelInstance;

  constructor(modelName: ModelNames) {
    this.modelName = modelName;
    this.model = dataSource[this.modelName] as ModelInstance;
  }

  async getAllRegisters() {
    return this.model.findAll();
  }

  async getById(id: number) {
    return this.model.findOne({
      where: { id }
    });
  }

  async createRegister(newRegister: NewRegister) {
    return this.model.create(newRegister);
  }

  async updateRegister(dataUpdated: DataUpdated, id: number) {
    const [affectedCount] = await this.model.update(dataUpdated, {
      where: { id }
    });

    return affectedCount > 0;
  }

  async deleteRegister(id: number) {
    const deletedCount = await this.model.destroy({
      where: { id }
    });

    return deletedCount > 0;
  }
}
