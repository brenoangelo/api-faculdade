import { Router } from 'express'
import { CourseController } from '../controllers/CourseController'

const courseController = new CourseController()

const router = Router()

router.get('/courses', (req, res) => courseController.getAll(req, res))
router.get('/courses/:id', (req, res) => courseController.getById(req, res))
router.post('/courses', (req, res) => courseController.create(req, res))
router.put('/courses/:id', (req, res) => courseController.update(req, res))
router.delete('/courses/:id', (req, res) => courseController.delete(req, res))

export {
  router as courses
}