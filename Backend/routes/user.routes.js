const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')
const { authUser } = require('../middlewares/auth.middleware')

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
  ],
  userController.registerUser
)

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be more than 6 letter'),
  ],
  userController.loginUser
)

router.get('/profile', authUser, userController.getUserProfile)

router.get('/logout', authUser, userController.logoutUser)

module.exports = router
