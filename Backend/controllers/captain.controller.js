const captainModel = require('../models/captain.model.js')
const { validationResult } = require('express-validator')
const captainService = require('../services/captain.service.js')
const blacklistModel = require('../models/blacklistToken.model')

module.exports.registerCaptain = async (req, res) => {
  console.log('req', req.body)
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { fullname, email, password, vehicle } = req.body

  const isCaptainAlreadyExist = await captainModel.findOne({ email })
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: 'Captain already exist' })
  }

  const hashPassword = await captainModel().hashPassword(password)

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  })

  const token = await captainModel().generateAuthToken()
  res.status(201).json({ token, captain })
}

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body

  const captain = await captainModel.findOne({ email }).select('+password')

  if (!captain) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const isMatch = await captain.comparePassword(password)

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const token = await captain.generateAuthToken()
  res.cookie('token', token)
  res.status(200).json({ token, captain })
}

module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain })
}

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.header('Authorization')?.split(' ')[1]
  await blacklistModel.create({ token })
  res.clearCookie('token')
  res.status(200).json({ message: 'Logout successfully' })
}
