import { Controller } from './Controller'
import  { CourseServices } from '../services/CourseServices'

const courseServices = new CourseServices()

export class CourseController extends Controller{
  constructor() {
    super(courseServices)
  }
}
