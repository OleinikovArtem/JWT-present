import { LOGIN, LOGOUT } from '../types'

const initialState = {
  user: null,
}
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default authReducer
