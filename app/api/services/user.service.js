const { generatePassword } = require('../helpers/password');
const User = require('../models/user.model');

const createUser = async ({ password, ...rest }) => User.create({ ...rest, password: generatePassword(password) })

const getUsersService = async () => {
  const users = await User.find({})
  return users.map(user => cleanUserData(user))
}

const findUser = async (body) => {
  const user = await User.findOne(body)
  return cleanUserData(user)
}

const cleanUserData = (user) => {
  user.login = undefined
  user.password = undefined
  return user
}

module.exports = {
  createUser,
  getUsersService,
  findUser,
}