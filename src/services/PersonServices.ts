import { Services } from "./Services"


export class PersonServices extends Services {
  constructor() {
    super('Person')
  }

  async getRegistrationsByStudent(id: number) {
    const student = await super.getById(id)
    const registrationsList = await student.getEnrolledClasses()

    return registrationsList
  }
}
