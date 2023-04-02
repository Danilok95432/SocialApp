import {combineReducers, legacy_createStore as createStore} from "redux"; 
import dialogsReducer from "./dialogsReducer";
import messangerReducer from "./messangerReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    messangerPage: messangerReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;