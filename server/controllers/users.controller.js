const { getUsersService } = require("../services/user.service")

const getUsers = async (req, res, next) => {
  try {
    const users = await getUsersService()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUsers
}