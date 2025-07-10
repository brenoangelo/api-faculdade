class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity
  }

  async getAll(req, res) {
    try {
       const data = await this.serviceEntity.getAllRegisters()

      return res.status(200).json(data)
    }catch(error) {
      console.error(error)
    }
  }

  async getById(req, res) {
    const { id } = req.params

    try {
      const data = await this.serviceEntity.getById(Number(id))

      if(!data.length) {
        return res.status(404).json({ message: 'Não encontrado' })
      }

      return res.status(200).json(data)
    }catch(error) {
      console.error(error)
    }
  }

  async create(req, res) {
    const newRegister = req.body

    try {
      await this.serviceEntity.createRegister(newRegister)

      res.status(200).json(newRegister)
    } catch (error) {
      console.error(error)
    }
  }

  async update(req, res) {
    const { id } = req.params
    const dataUpdated = req.body

    try {
      const isUpdated = await this.serviceEntity.updateRegister(
        dataUpdated, Number(id)
      )

      if(!isUpdated) {
        return res.status(400).json({ message: 'Registro não foi atualizado' })
      }

      return res.status(200).json({ message: 'Atualizado com sucesso!' })
    } catch (error) {
      console.error(error)
    }
  }

  async delete(req, res) {
    const { id } = req.params
 
    try {
      const isDeleted = await this.serviceEntity.deleteRegister(
        Number(id)
      )

      if(!isDeleted) {
        return res.status(400).json({ message: 'Registro não foi deletado' })
      }

      return res.status(200).json({ message: 'Deletado com sucesso!' })
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Controller