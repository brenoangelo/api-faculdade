import { ModelStatic, Model } from 'sequelize';

export interface ModelsTypes {
  Category: ModelStatic<Model>;
  Person: ModelStatic<Model>;
  Registration: ModelStatic<Model>;
  Course: ModelStatic<Model>;
}

export interface AssociableModel extends ModelStatic<Model> {
  associate?: (db: ModelsTypes) => void;
}

