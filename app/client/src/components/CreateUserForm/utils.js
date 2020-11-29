import * as Yup from 'yup'

const errors = {
  required: 'Required!'
}
export const editUserSchema = Yup.object().shape({
  email: Yup.string().email().required(errors.required),
  name: Yup.string().required(errors.required),
  surname: Yup.string().required(errors.required),
  phone: Yup.string()
    .min(7, 'Too Short!')
    .max(12, 'Too Long!')
    .required(errors.required),
  ssn: Yup.string()
    .min(9, 'Too Short!')
    .max(9, 'Too Long!')
    .required(errors.required),
  address: Yup.string().required(errors.required)
})

export const fields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: "test@test.com"
  },
  {
    label: 'Name',
    name: 'name',
    placeholder: "John"
  },
  {
    label: 'Surname',
    name: 'surname',
    placeholder: "Doe"
  },
  {
    label: 'Phone',
    name: 'phone',
    type: "tel",
    placeholder: "380 000 00 00"
  },
  {
    label: 'SSN',
    name: 'ssn',
    placeholder: "123456789"
  },
  {
    label: 'Full Address',
    name: 'address',
    placeholder: "USA"
  }
]
