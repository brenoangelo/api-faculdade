import { Router } from 'express'
import { CategoryController } from '../controllers/CategoryController'

const categoryController = new CategoryController()

const router = Router()

router.get('/categories', (req, res) => categoryController.getAll(req, res))
router.get('/categories/:id', (req, res) => categoryController.getById(req, res))
router.post('/categories', (req, res) => categoryController.create(req, res))
router.put('/categories/:id', (req, res) => categoryController.update(req, res))
router.delete('/categories/:id', (req, res) => categoryController.delete(req, res))

export {
  router as categories
}