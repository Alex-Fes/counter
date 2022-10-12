import {combineReducers, legacy_createStore as createStore} from "redux"
import {settingsReducer} from "./settingsReducer";

type ReducerType = typeof rootReducer;
export type StoreType = ReturnType<ReducerType>

let rootReducer = combineReducers({
    settings: settingsReducer
})


export const store = createStore(rootReducer);

//@ts-ignore
window.store = store

