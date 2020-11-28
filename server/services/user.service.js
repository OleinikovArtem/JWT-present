const { generatePassword } = require('../helpers/password');
const User = require('../models/user.model');

const createUser = ({ password, ...rest }) => User.create({ ...rest, password: generatePassword(password) }, { new: true })

const getUsersService = () => User.find({})

const findUser = (body) => User.findOne(body)

module.exports = {
  createUser,
  getUsersService,
  findUser
}