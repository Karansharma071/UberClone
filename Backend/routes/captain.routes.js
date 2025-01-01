const express = require('express')
const router = express.Router()
const { validationResult, body } = require('express-validator')
const captainModel = require('../models/captain.model')
const captainController = require('../controllers/captain.controller')
const { authCaptain } = require('../middlewares/auth.middleware')
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('First name must be more than 3 letter'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be more than 6 letter'),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('First name must be more than 3 letter'),
    body('vehicle.color')
      .isLength({ min: 3 })
      .withMessage('Color must be more than 3 letter'),
    body('vehicle.plate')
      .isLength({ min: 3 })
      .withMessage('Plate must be more than 3 letter'),
    body('vehicle.capacity')
      .isInt({ min: 1 })
      .withMessage('Capacity must be atlest 1'),
    body('vehicle.vehicleType')
      .isIn(['car', 'motorcycle', 'auto'])
      .withMessage('Invalid vehicle type'),
  ],
  captainController.registerCaptain
)

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be more than 6 letter'),
  ],
  captainController.loginCaptain
)

router.get('/profile', authCaptain, captainController.getCaptainProfile)

router.get('/logout', authCaptain, captainController.logoutCaptain)

module.exports = router
