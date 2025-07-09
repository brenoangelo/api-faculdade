import { Request, Response } from 'express';

interface IServiceEntity {
  getAllRegisters(): Promise<any[]>;
  getById(id: number): Promise<any[]>;
  createRegister(data: any): Promise<void>;
  updateRegister(data: any, id: number): Promise<boolean>;
  deleteRegister(id: number): Promise<boolean>;
}

export class Controller {
  private serviceEntity: IServiceEntity;

  constructor(serviceEntity: IServiceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req: Request, res: Response) {
    try {
      const data = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this.serviceEntity.getById(Number(id));

      if (!data.length) {
        return res.status(404).json({ message: 'Não encontrado' });
      }

      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async create(req: Request, res: Response) {
    const newRegister = req.body;

    try {
      await this.serviceEntity.createRegister(newRegister);
      return res.status(201).json(newRegister);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const dataUpdated = req.body;

    try {
      const isUpdated = await this.serviceEntity.updateRegister(dataUpdated, Number(id));

      if (!isUpdated) {
        return res.status(400).json({ message: 'Registro não foi atualizado' });
      }

      return res.status(200).json({ message: 'Atualizado com sucesso!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const isDeleted = await this.serviceEntity.deleteRegister(Number(id));

      if (!isDeleted) {
        return res.status(400).json({ message: 'Registro não foi deletado' });
      }

      return res.status(200).json({ message: 'Deletado com sucesso!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
