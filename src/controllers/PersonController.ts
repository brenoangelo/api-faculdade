import { PersonServices } from "../services/PersonServices";
import { Controller } from "./Controller"
import { Request, Response } from 'express';

const personServices = new PersonServices()

export class PersonController extends Controller {

  constructor() {
    super(personServices)
  }

  async getRegistrations(req: Request, res: Response) {
    const { studentId } = req.params

    try {
      const registrationsList = await personServices.getRegistrationsByStudent(Number(studentId))

      return res.status(200).json(registrationsList)
    } catch (error: any) {
      console.error(error.message)
      //error
    }
  }
}
