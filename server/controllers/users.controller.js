const { getUsersService, findUser } = require("../services/user.service")

const getUsers = async (req, res, next) => {
  try {
    const users = await getUsersService()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

const getClient = async (req, res, next) => {
  try {
    const user = await findUser({ _id: req.user.id })
    res.json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUsers,
  getClient
}