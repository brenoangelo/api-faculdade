import { RegistrationServices } from '../services/RegistrationServices'
import { Controller } from './Controller'

const registrationServices = new RegistrationServices()

export class RegistrationController extends Controller{
  constructor() {
    super(registrationServices)
  }
}
