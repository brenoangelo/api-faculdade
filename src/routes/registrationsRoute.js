const { Router } = require('express')
const RegistrationController = require('../controllers/RegistrationController.js')

const registrationController = new RegistrationController()

const router = Router()

router.get('/registrations', (req, res) => registrationController.getAll(req, res))
router.get('/registrations/:id', (req, res) => registrationController.getById(req, res))
router.post('/registrations', (req, res) => registrationController.create(req, res))
router.put('/registrations/:id', (req, res) => registrationController.update(req, res))
router.delete('/registrations/:id', (req, res) => registrationController.delete(req, res))

module.exports = router