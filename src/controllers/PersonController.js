const Controller = require('./Controller.js')
const PersonServices = require('../services/PersonServices.js')

const personServices = new PersonServices()

class PersonController extends Controller{
  constructor() {
    super(personServices)
  }

  async getRegistrations(req, res) {
    const { studentId } = req.params
  
    try {
      const registrationsList = await personServices.getRegistrationsByStudent(Number(studentId))

      return res.status(200).json(registrationsList)
    }catch (error) {
      console.error(error.message)
      //error
    }
  }
}

module.exports = PersonController