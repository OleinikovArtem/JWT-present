import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'

import { pagesUrls } from '../../routers'

import './navbar.css'
import { logOutAction } from '../../actions/authActions'

const Navbar = ({ admin, logOut }) => {
  const history = useHistory()
  const text = useMemo(() => (admin ? 'LogOut' : 'Login'), [admin])
  const goToLoginPage = useCallback(
    () => () => history.push(pagesUrls.login),
    []
  )

  const handleSubmit = useMemo(admin ? () => logOut : goToLoginPage, [admin])
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div className="flex">
            <Link to="/" className="link">
              <Typography variant="h6">Home</Typography>
            </Link>
            {admin && (
              <Link to={pagesUrls.users} className="link">
                <Typography variant="h6">Users table</Typography>
              </Link>
            )}
          </div>

          <Button color="inherit" onClick={handleSubmit}>
            {text}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.prototype = {
  admin: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default connect(({ auth: { admin } }) => ({ admin }), {
  logOut: logOutAction,
})(Navbar)
