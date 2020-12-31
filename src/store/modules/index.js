import { combineReducers } from "redux"
import authReducer  from './auth/reducer/authReducer'

const reducer = combineReducers({
  Auth: authReducer,
  IntegrationsState: integrationsState
})

export default reducer