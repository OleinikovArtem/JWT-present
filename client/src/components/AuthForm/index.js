import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { Button, TextField, Typography } from '@material-ui/core'

import './auth-form.css'

const AuthFormSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  login: Yup.string().required('Required')
})

const AuthForm = ({ title, submitAction }) => {
  return (
    <Formik
      initialValues={{ password: '', login: '' }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setSubmitting(true)
        submitAction(values)
        setSubmitting(false)
        resetForm()
      }}
      validationSchema={AuthFormSchema}
    >
      {({ handleSubmit, resetForm, handleChange, values, errors, touched }) => (
        <form className="auth-form" onSubmit={handleSubmit}>
          <Typography variant="h3" align="center">
            {title}
          </Typography>
          <TextField
            className="mb-10"
            label="login"
            name="login"
            value={values.login}
            onChange={handleChange}
            placeholder="login"
            error={touched.login && errors.login}
            helperText={touched.login && errors.login}
            fullWidth
          />
          <TextField
            className="mb-10"
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            error={touched.password && errors.password}
            helperText={touched.password && errors.password}
            fullWidth
          />
          <div className="auth-form__btn-container">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              {title}
            </Button>
            <Button variant="contained" color="secondary" onClick={resetForm}>
              Reset
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
}

AuthForm.prototype = {
  title: PropTypes.string.isRequired,
  submitAction: PropTypes.func.isRequired
}

export default AuthForm
