import {combineReducers} from "redux";
import UsersReducer from './users'

// Step 5: Combine ALl Reducers
export default combineReducers({
    users: UsersReducer
})
