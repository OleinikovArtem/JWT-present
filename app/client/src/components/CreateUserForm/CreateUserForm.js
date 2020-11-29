import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Button, TextField, Typography } from '@material-ui/core'

import { editUserSchema, fields } from './utils'

const CreateUserForm = ({ submitAction }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        surname: '',
        phone: '',
        ssn: '',
        address: ''
      }}
      onSubmit={(values, { resetForm }) => {
        submitAction(values)
        resetForm()
      }}
      validationSchema={editUserSchema}
    >
      {({ handleSubmit, resetForm, handleChange, values, errors, touched }) => (
        <form className="auth-form" onSubmit={handleSubmit}>
          <Typography variant="h3" align="center">
            Add information about you
          </Typography>
          {fields.map(({ name, label, type, placeholder }) => <TextField
            className="mb-10"
            label={label}
            name={name}
            type={type}
            value={values[name]}
            onChange={handleChange}
            placeholder={placeholder}
            error={touched[name] && errors[name]}
            helperText={touched[name] && errors[name]}
            fullWidth
          />)}
          <div className="auth-form__btn-container">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              Add
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

CreateUserForm.prototype = {
  submitAction: PropTypes.func.isRequired
}
export default CreateUserForm
