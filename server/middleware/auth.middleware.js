const { Unauthorized } = require("http-errors");
const { verifyTokenService } = require("../services/auth.service");

const authMiddleware = async (req, res, next) => {
  try {
    const { headers: { authorization } } = req

    if (!authorization) throw Unauthorized()

    const token = authorization.split(" ")[1]
    // const token = authorization.split("Bearer ")[1]

    const user = verifyTokenService(token)

    req.user = user

    console.log('----------------------------------------------------------')
    console.log('req.user', req.user)
    console.log('----------------------------------------------------------')

    next()

  } catch (error) {
    next(Unauthorized())
  }
}

module.exports = {
  authMiddleware,
}