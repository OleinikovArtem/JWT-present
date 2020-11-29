import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import AuthForm from '../../components/AuthForm'
import { loginAction } from '../../actions/authActions'
import { useHistory } from 'react-router-dom'
import { pagesUrls } from '../../routers'

const LoginPage = ({ loginAction, admin }) => {
  const history = useHistory()
  useEffect(() => {
    if (admin) {
      history.push(pagesUrls.users)
    }
  }, [admin])

  return <AuthForm title="Login" submitAction={loginAction} />
}

LoginPage.prototype = {
  loginAction: PropTypes.func.isRequired,
  admin: PropTypes.bool.isRequired,
}

export default connect(({ auth: { admin } }) => ({ admin }), { loginAction })(
  LoginPage
)
