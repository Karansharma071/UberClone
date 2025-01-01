const userModel = require('../models/user.model')
const blacklistModel = require('../models/blacklistToken.model') // Import the blacklist model
const captainModel = require('../models/captain.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return res.status(401).send({ error: 'Unauthorized' })
  }
  try {
    // Check if the token is in the blacklist
    const isblacklistedToken = await blacklistModel.findOne({ token })
    if (isblacklistedToken) {
      return res.status(401).send({ error: 'Unauthorized' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await userModel.findById(decoded._id)
    if (!user) {
      throw new Error()
    }
    req.user = user
    next()
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized' })
  }
}

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return res.status(401).send({ error: 'Unauthorized' })
  }
  try {
    // Check if the token is in the blacklist
    const isblacklistedToken = await blacklistModel.findOne({ token })
    if (isblacklistedToken) {
      return res.status(401).send({ error: 'Unauthorized' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const captain = await captainModel.findById(decoded._id)
    if (!captain) {
      throw new Error()
    }
    req.captain = captain
    next()
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized' })
  }
}
