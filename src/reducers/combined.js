import User from './users'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    users: User
})

export default rootReducer