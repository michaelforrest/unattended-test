import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules'

const initialState = {}

const middleware = [
  thunk,
]

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)
