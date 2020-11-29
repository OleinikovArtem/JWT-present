import { toast } from 'react-toastify'

import { user } from '../api'
import { GET_USERS } from '../types'

export const createUser = payload => async dispatch => {
  try {
    await user.create(payload)
    toast.success('Submitted successfully')
  } catch (e) {
    toast.error('Something went wrong')
  }
}

export const getUsersActions = () => async dispatch => {
  try {
    const { data } = await user.getAll()
    dispatch({
      type: GET_USERS,
      payload: data
    })
  } catch (e) {
    toast.error('Something went wrong')
  }
}
