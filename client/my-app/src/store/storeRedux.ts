import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { registerReducer } from "./RegisterReducer"
import { UserReducer } from "./UserReducer"



debugger
const rootReducers = combineReducers({
    user: UserReducer,
    register: registerReducer
})


export type AppRootState = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, applyMiddleware(thunk))

