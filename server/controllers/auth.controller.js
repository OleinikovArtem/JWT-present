const { loginService, refreshTokenService } = require("../services/auth.service")
const { createUser } = require("../services/user.service")

const signup = async (req, res, next) => {
  try {
    await createUser(req, body)

    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const tokens = await loginService(req.body)
    res.json(tokens)
  } catch (error) {
    next(error)
  }
}

const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body

    const newTokens = await refreshTokenService(refreshToken)
    res.json(newTokens)
  } catch (error) {
    next(error)
  }
}


module.exports = {
  signup,
  login,
  refreshToken,
}