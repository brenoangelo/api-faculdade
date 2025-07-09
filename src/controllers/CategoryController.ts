import { CategoryServices } from '../services/CategoryServices'
import { Controller } from './Controller'

const categoryServices = new CategoryServices()

export class CategoryController extends Controller {
  constructor() {
    super(categoryServices)
  }
}
