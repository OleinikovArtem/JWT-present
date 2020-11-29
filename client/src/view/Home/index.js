import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CreateUserForm from '../../components/CreateUserForm'
import { createUser } from '../../actions/userActions'

const HomePage = ({ createUser }) => (
  <CreateUserForm submitAction={createUser} />
)

HomePage.prototype = {
  addUserAction: PropTypes.func.isRequired
}
export default connect(null, { createUser })(HomePage)
