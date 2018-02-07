import { combineReducers } from 'redux'
import mainReducer from './mainReducer'

export default () => {
  const rootReducer = combineReducers({
    cat: mainReducer
  })

  return rootReducer
}
