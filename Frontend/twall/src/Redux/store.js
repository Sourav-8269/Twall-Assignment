import {applyMiddleware, legacy_createStore} from "redux";
import {reducer as AppReducer} from "./App/reducer"
import thunk from "redux-thunk"

const store=legacy_createStore(AppReducer,applyMiddleware(thunk));


export {store};