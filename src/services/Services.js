const dataSource = require('../models')

class Services {
  constructor(modelName) {
    this.model = modelName
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll()
  }

  async getById(id) {
    return dataSource[this.model].findOne({
      where: {
        id
      }
    })
  }

  async createRegister(newRegister) {
    return dataSource[this.model].create(newRegister)
  }

  async updateRegister(dataUpdated, id) {
    const registerUpdatedList = dataSource[this.model].update(dataUpdated, {
      where: { id }
    })

    return !(registerUpdatedList[0] === 0)
  }

  async deleteRegister(id) {
    const deletedIds = dataSource[this.model].destroy({
      where: { id }
    })

    return !(deletedIds[0] === 0)
  }
}

module.exports = Services