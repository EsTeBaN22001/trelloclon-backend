import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../config.js'

export const generateToken = email => {
  const payload = {
    email
  }

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1d' })
  return token
}

export const verifyToken = (req, res, next) => {
  const token = req.header.authorization

  if (!token) {
    res.status(401)
    return res.end('Unauthorized')
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY)
    req.tokenInfo = decoded
    next()
  } catch (err) {
    res.status(401)
    return res.end('Unauthorized')
  }
}
