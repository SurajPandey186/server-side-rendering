import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    admins: adminReducer
})