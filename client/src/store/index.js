import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers/'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

export const store = createStoreWithMiddleware(
  rootReducer,
  window?.__REDUX_DEVTOOLS_EXTENSION__()
)
