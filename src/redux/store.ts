import { combineReducers, createStore } from "redux"
import appReducer from "./app-reducer"

const rootReducer = combineReducers({
    app: appReducer
})

const store = createStore(rootReducer)

export default store


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch