import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { adminRoutes, defaultRoutes, pagesUrls } from '../../routers'
import Layout from '../Layout'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const App = ({ admin }) => {
  const defaultPage = useMemo(
    () => (admin ? pagesUrls.home : pagesUrls.login),
    [admin]
  )

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Layout>
          {defaultRoutes.map(route => (
            <Route {...route} />
          ))}
          {admin && adminRoutes.map(route => <Route {...route} />)}
        </Layout>
        <Redirect to={defaultPage} />
      </Switch>
    </>
  )
}


const mapStateToProps = ({ auth: { admin } }) => ({ admin })

export default connect(mapStateToProps)(App)
