import { Router } from 'express'
import { PersonController } from '../controllers/PersonController'
import { RegistrationController } from '../controllers/RegistrationController'

const personController = new PersonController()
const registrationController = new RegistrationController()

const router = Router()

router.get('/persons', (req, res) => personController.getAll(req, res))
router.get('/persons/:id', (req, res) => personController.getById(req, res))
router.post('/persons', (req, res) => personController.create(req, res))
router.put('/persons/:id', (req, res) => personController.update(req, res))
router.delete('/persons/:id', (req, res) => personController.delete(req, res))
router.get('/persons/:studentId/registrations', (req, res) => personController.getRegistrations(req, res))
router.post('/persons/:studentId/registrations', (req, res) => registrationController.create(req, res))

export {
  router as persons
}