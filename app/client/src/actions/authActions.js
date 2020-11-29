import { toast } from 'react-toastify'

import tokenHolder from '../helpers/TokenHolder'
import { auth } from '../api'
import { LOGIN, LOGOUT } from '../types'
import { redirectNativeToMain } from '../helpers/nativeRedirect'

export const loginAction = payload => async dispatch => {
  try {
    const { data } = await auth.login(payload)

    if (!data) toast.error('Unauthorized')

    const { tokens, user } = data

    tokenHolder.tokens = tokens

    dispatch({
      type: LOGIN,
      payload: user,
    })
  } catch (e) {
    toast.error(e.message || 'Something went wrong')
  }
}

export const logOutAction = () => dispatch => {
  tokenHolder.removeTokens()
  redirectNativeToMain()
  dispatch({
    type: LOGOUT,
  })
}
