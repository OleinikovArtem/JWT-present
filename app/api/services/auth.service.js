const { Unauthorized } = require("http-errors")
const jwt = require("jsonwebtoken")
const { generatePassword } = require("../helpers/password")
const { findUser } = require('./user.service')

const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = process.env

const verifyTokenService = (token) => jwt.verify(token, ACCESS_TOKEN_KEY)

const refreshTokenService = async (oldRefreshToken) => {
  const { id } = jwt.verify(oldRefreshToken, REFRESH_TOKEN_KEY)

  const user = await findUser({ _id: id })
  const newTokens = getTokens(user)

  return newTokens
}

const loginService = async ({ login, password }) => {
  const user = await findUser({ login, password: generatePassword(password) })

  if (!user) throw Unauthorized()

  const tokens = getTokens(user)

  user.login = undefined
  user.password = undefined

  return { tokens, user }
}

const getTokens = ({ _id }) => {
  const payload = { id: _id }
  // h days 
  const accessToken = jwt.sign(payload, ACCESS_TOKEN_KEY, { expiresIn: "20s" })
  const refreshToken = jwt.sign(payload, REFRESH_TOKEN_KEY, { expiresIn: "30days" })

  return { accessToken, refreshToken }
}

module.exports = {
  verifyTokenService,
  loginService,
  refreshTokenService
}